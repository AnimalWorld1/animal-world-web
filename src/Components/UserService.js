import { UALJs } from "ual-plainjs-renderer";
import { Wax } from "@eosdacio/ual-wax";
import { isEmpty } from "lodash";
import { Anchor } from "ual-anchor";



/**
 * Class to manage user data; it will be saved on Login and deleted on Logout
 */
export class User {
  appName = "animalworld";

  /**
   * WAX Mainnet configuration
   */
  myChain = {
    chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
    rpcEndpoints: [
      {
        protocol: "https",
        host: "api.waxsweden.org",
        port: "443",
      },
    ],
  };

  /**
   * WAX Testnet configuration
   */
  // myChain = {
  //     chainId: 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12',
  //     rpcEndpoints: [{
  //         protocol: 'https',
  //         host: 'testnet-wax.3dkrender.com',
  //         port: ''
  //     }]
  // };

  ual;

  // User session data
  authName = undefined;
  serviceLoginName = undefined;
  // Shows petition signing and current balance obtaining methods
  session = undefined;

  // Current balance
  userBalance = 0;
  userAWCBalance= 0;

  userStakePower=0;
  userLastClaim=0;
  // Callback to refer to successful login
  callbackServerUserData = undefined;

  getName() {
    return this.authName;
  }

  login(callback) {
    const ualButton = document.querySelector(".ual-button-gen");
    ualButton.click();

    this.callbackServerUserData = callback;
  }

  isLogged() {
    const auth = !isEmpty(this.authName) && !isEmpty(this.session);
    return auth;
  }

  logout() {
    console.log("Logout");
    this.authName = undefined;
    this.session = undefined;

    this.ual.logoutUser();


    if (this.callbackServerUserData !== undefined) {
      this.callbackServerUserData();
    }
  }

  // UAL API call response
  async ualCallback(userObject) {
    this.session = userObject[0];
    this.serviceLoginName = this.session.constructor.name;
    this.authName = this.session.accountName;


    this.getBalance();

    if (this.callbackServerUserData !== undefined) {
      this.callbackServerUserData();
    }
  }

  getAWCBalance()
  {
        const contract = "animalstake1";
        const endpoint = "api.wax.alohaeos.com";
        var path = "/v1/chain/get_table_rows";

        var data = JSON.stringify({
          json: true,
          code: contract,
          scope: contract,
          table: "user",
          limit: 1,
          lower_bound: 'tokenanimal1',
        });


  }
  
  getBalance() {
    if (this.session && this.session.rpc) {
      const balance =
        this.session &&
        this.session.rpc &&
        this.session.rpc.get_account(this.authName);
      console.log(this.session.rpc);
      balance.then((balance) => {
        this.balance = balance.core_liquid_balance;
  console.log(balance);

      });
      return balance;
    }
    else{
        this.logout();
    }
  }

  // UserService init called to prepare UAL Login.
  init() {
    // Binding:
    this.ualCallback = this.ualCallback.bind(this);

    const wax = new Wax([this.myChain], { appName: this.appName });

    const anchor = new Anchor([this.myChain], { appName: this.appName });

    const divUal = document.createElement("div");
    divUal.setAttribute("id", "ual-login");
    document.body.appendChild(divUal);

    const divLoginRoot = document.getElementById("ual-login");
    this.ual = new UALJs(
      this.ualCallback,
      [this.myChain],
      this.appName,
      [wax, anchor],
      { containerElement: divLoginRoot }
    );
    this.ual.init();
  }

  static new() {
    if (!User.instance) {
      User.instance = new User();
    }
  console.log(User.instance);
    return User.instance;
  }
}

export const UserService = User.new();
