  import React from 'react';
  import * as waxjs from "@waxio/waxjs/dist";
  import AnchorLink from 'anchor-link';
  import AnchorLinkBrowserTransport from 'anchor-link-browser-transport';
  const Assets= require('../assets/assets')

  const LogIn = (props) => {
    const wax_loginHandler = async ()=>{
      const wax = new waxjs.WaxJS({
        rpcEndpoint: 'https://api.wax.alohaeos.com',
        tryAutoLogin: false
      });

      const userAccount = await wax.login();
      props.sessionHandler(wax,userAccount,"w");

      var balance={awc:0,wax:0};

      const r = await wax.rpc.get_table_rows({
        json: true,
        code: "eosio.token",
        scope: userAccount,
        table: "accounts",
      });
      var empty="0.00000000 WAX";
    
      if(r.rows.length==0 ) balance.wax=empty;
else
     balance.wax= (r.rows[0].balance);
     

     const x = await wax.rpc.get_table_rows({
      json: true,
      code: "tokenanimal1",
      scope: userAccount,
      table: "accounts",
    });
    var empty="0.0000 AWC";
  
    if(x.rows.length==0 ) balance.wax=empty;
else
   balance.awc= (x.rows[0].balance);   

console.log(balance);
      Assets.functions.getassetdata(userAccount);
     Assets.functions.getbalancedata(userAccount,props);
      props.handleLogin();
      props.onClose();

    }

    const anchor_loginHandler = async ()=>{
        const transport = new AnchorLinkBrowserTransport();
        const link = new AnchorLink({
          transport,
          chains: [{
            chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
            nodeUrl: 'https://api.wax.alohaeos.com',
          }],
        });
        await link.login('animalworld').then((result) => {
          const anchorAccount = result.session.auth.actor.toString();
  
          props.sessionHandler(result.session,anchorAccount,"a");
        Assets.functions.getassetdata(anchorAccount);
     Assets.functions.getbalancedata(anchorAccount,props);
  
        props.handleLogin();
        props.onClose();
            
      });
    }

    return (
      <div
          style={{
            width: "50%",
            background: "white",
            padding: "3rem",
            borderRadius: "5px",
          }}
        >
          <p>To continue please select an option</p>
          <div
            role="button"
            aria-label="WAX Cloud Wallet"
            tabindex="0"
            onClick={wax_loginHandler}
            data-tip=""
            data-effect="solid"
            style={{
              fontWeight: "100",
              color: "white",
              borderRadius: "6px",
              width: "100%",
              margin: "20px auto",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px",
              opacity: "1",
              transition: "all 0.3s ease 0s",
              outline: "none",
              background: "rgb(17, 17, 17)",
            }}
          >
            <div
              style={{
                boxSizing: "border-box",
                fontFamily:
                  '"Source Sans Pro", sans-serif; display: inline-block',
                float: "left",
                width: "50px",
                padding: "8.5px 10px",
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                borderRadius: "5px 0px 0px 5px",
              }}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAEt2lUWHRYTU
w6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpy
ZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az
0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8x
OTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIg
ogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0
aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaH
R0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25z
LmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3
hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9z
VHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwIgogICBleGlmOl
BpeGVsWURpbWVuc2lvbj0iMzAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdp
ZHRoPSIzMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMzAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9Ij
IiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLjAiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLjAiCiAg
IHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQz
YxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDYtMTlUMDI6MDE6NDgrMDI6MDAiCiAg
IHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDYtMTlUMDI6MDE6NDgrMDI6MDAiPgogICA8eG1wTU06SG
lzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9k
dWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gKE1hciAzMSAyMD
IwKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMC0wNi0xOVQwMjowMTo0OCswMjowMCIvPgogICAgPC9y
ZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSRE
Y+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+b+esCwAAAYJpQ0NQc1JHQiBJRUM2MTk2
Ni0yLjEAACiRdZHPK0RRFMc/ZjCTH42QLCwmYTUjRk1slJmEkjRGGWxm3vxS8+P13kiyVbZTlNj4te
AvYKuslSJSsrKwJjZMz3kzUyOZczv3fO733nO691ywBFNKWq8dgHQmpwUmfM6F0KLT9kI9rXTgwR5W
dHVsdnaaqvZ5T40Zb91mrern/rXGaExXoMYuPKqoWk54Unh6LaeavCPcriTDUeEzYZcmFxS+M/VIiV
9NTpT422QtGPCDpUXYmfjFkV+sJLW0sLycnnRqVSnfx3xJUywzPyexW7wLnQAT+HAyxTh+vAwyIrMX
t/SnX1ZUyR8o5s+QlVxFZpV1NFZIkCSHS9RVqR6TGBc9JiPFutn/v33V40OeUvUmH9Q9G8Z7L9i2oZ
A3jK8jwygcg/UJLjOV/OwhDH+Inq9oPQfg2ITzq4oW2YWLLeh8VMNauChZxS3xOLydQnMI2m6gYanU
s/I+Jw8Q3JCvuoa9feiT847lH1hwZ9/TwxVHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8klEQVRIie
2Uz0tUcRTFzx0nLTBKCHQ14cIJ+rEpxMBFuugPSHAhEdQm2kQtQ4kpaqU5u4pw1cLViBG4SKEfCFFE
SNFQEbWQmrI2UeGMhtOnxbvDPN883QvvbO4753vv+d73ffd9pQQJEiTYajBJAlKSMDMAq+kx2jpuZv
+AJknHJXVI+iZpznNSwbpMBfcbFGaioQtvYFNtg5wu4DMBHgG7JIlisbkhN3csXSu6ADwBOp33AHPA
LHAkZDwPXA5tdgv4ALwGDrg25Zsvsrp6UJJ+Tw7tWc5nxiv5zPPyaPudlYXJLqBXwBlPHvHiu9Qx4d
o15+edjzr/4rECdPja9VB93/IlnaWQpZLfu7gyltkvSaXSyx0CdgNrwCugBfgJfAWWgB+uvQPW3PiU
m753PuT8DbDdtQGgCsDf8nB5RIPfc2oNjlr1TwXc8+IbHoeBKxHtNnDYn38B/UABeBZ6wxn3O8l6jM
fOCHAikrgPOBTRLvoJABwFssAYkAPOAQ997aPHP/7mjwGoVovU5yhV27gVeEpwvPdDDT0APgEvgJIb
no5OashjGlgAZoCs683ATeAtwfzsjCtuitHavAjgqmtpIOUxDWzboJnG3wnSUv0CMTMjkmB+EXRK6p
a0ZGbzm+W7H4q5bGo8rsEECRIk2Br4D20NhhljafHuAAAAAElFTkSuQmCC"
                alt=""
                style={{
                  maxHeight: "30px",
                  maxWidth: "100%",
                  margin: "7% auto auto",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                boxSizing: "border-box",
                fontFamily:
                  '"Source Sans Pro", sans-serif; display: inline-block',
                padding: "12px 13px 12px 15px",
                width: "calc(100% - 50px)",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  letterSpacing: "1.1px",
                }}
              >
                WAX Cloud Wallet
              </span>
              <span
                style={{ float: "right", height: "16px", marginTop: "2px" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div
            role="button"
            aria-label="WAX Cloud Wallet"
            tabindex="0"
            onClick={anchor_loginHandler}
            data-tip=""
            data-effect="solid"
            style={{
              fontWeight: "100",
              color: "white",
              borderRadius: "6px",
              width: "100%",
              margin: "20px auto",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px",
              opacity: "1",
              transition: "all 0.3s ease 0s",
              outline: "none",
              background: "rgb(17, 17, 17)",
            }}
          >
            <div
              style={{
                boxSizing: "border-box",
                fontFamily:
                  '"Source Sans Pro", sans-serif; display: inline-block',
                float: "left",
                width: "50px",
                padding: "8.5px 10px",
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                borderRadius: "5px 0px 0px 5px",
              }}
            >
              <img
                src="https://play-lh.googleusercontent.com/DVLJnVhhOe99bwJjZ-00lAeaw-rqPPj2HRmlXOC0cr-xAOcWkjy8NuLGjB0kMdMBlg"
                alt=""
                style={{
                  maxHeight: "30px",
                  maxWidth: "100%",
                  margin: "7% auto auto",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                boxSizing: "border-box",
                fontFamily:
                  '"Source Sans Pro", sans-serif; display: inline-block',
                padding: "12px 13px 12px 15px",
                width: "calc(100% - 50px)",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  letterSpacing: "1.1px",
                }}
              >
                Anchor Wallet
              </span>
              <span
                style={{ float: "right", height: "16px", marginTop: "2px" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>)
  }
  export default LogIn;