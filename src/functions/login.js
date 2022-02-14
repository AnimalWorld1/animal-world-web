import StoreContext from "../store/RootStore";
import AnchorLinkBrowserTransport from "anchor-link-browser-transport";
import AnchorLink from "anchor-link";
import * as waxjs from "@waxio/waxjs/dist";
import {NotificationManager} from "react-notifications";

export default class LoginHandler {
    constructor() {
        const {AccountStore} = StoreContext();
        this.AccountStore = AccountStore;

        const transport = new AnchorLinkBrowserTransport();
        this.anchorLink = new AnchorLink({
            transport,
            chains: [{
                chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
                nodeUrl: 'https://wax.greymass.com',
            }],
        });
        this.wax = new waxjs.WaxJS("https://wax.greymass.com", null, null, false);
        this.dapp = "animalworld1";
    }

    async autoLogin() {
        const isAutoLoginAvailable = await this.isAutoLoginAvailable();
        if (isAutoLoginAvailable[0]) {
            await this.login(isAutoLoginAvailable[1]);
        }
    }

    async isAutoLoginAvailable() {
        const sessionList = await this.anchorLink.listSessions(this.dapp);
        if (sessionList && sessionList.length > 0) {
            return [true, "anchor"];
        } else {
            return [await this.wax.isAutoLoginAvailable(), "wcw"]
        }
    }

    async login(loginType) {
        if (loginType === "wcw") {
            try {
                const data = [];
                data.push("wcw", await this.wax.login(), this.wax.pubKeys);
                this.AccountStore.changeAccountAddress(data[1]);
                this.AccountStore.setUserData(data);
            } catch (e) {
                NotificationManager.error(e, "Error while logging in through WCW");
            }
        } else if (loginType === "anchor") {
            try {
                let wallet_session;
                const sessionList = await this.anchorLink.listSessions(this.dapp);
                if (sessionList.length > 0) {
                    wallet_session = await this.anchorLink.restoreSession(this.dapp);
                } else {
                    wallet_session = (await this.anchorLink.login(this.dapp)).session;
                }

                this.AccountStore.changeAccountAddress(String(wallet_session.auth).split("@")[0])
                this.AccountStore.setUserData(["anchor", String(wallet_session.auth).split("@")[0], wallet_session, String(wallet_session.auth).split("@")[1]]);
            } catch (e) {
                NotificationManager.error(e, "Error while logging in through Anchor");
            }
        }
    }
}

