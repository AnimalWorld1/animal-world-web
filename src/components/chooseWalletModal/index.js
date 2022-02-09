import './index.sass'
import {observer} from "mobx-react";
import StoreContext from "../../store/RootStore";
import ReactDOM from "react-dom";
import AnchorLinkBrowserTransport from "anchor-link-browser-transport";
import AnchorLink from "anchor-link";
import * as waxjs from "@waxio/waxjs/dist";

function ChooseWalletModal({opened, setOpened}) {
    const {AccountStore} = StoreContext();

    const transport = new AnchorLinkBrowserTransport();
    const anchorLink = new AnchorLink({
        transport,
        chains: [{
            chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
            nodeUrl: 'https://wax.greymass.com',
        }],
    });
    const wax = new waxjs.WaxJS("https://wax.greymass.com", null, null, false);
    const dapp = "animalworld1";

    async function login(loginType) {
        if (loginType === "wcw") {
            try {
                console.log("Trying to log in through WCW");
                const data = [];
                data.push("wcw", await wax.login(), wax.pubKeys);
                console.log("Logged in through WCW");
                AccountStore.changeAccountAddress(data[1]);
                AccountStore.setUserData(data);
            } catch (e) {
                console.error("Error while logging in through WCW", e);
            }
        } else if (loginType === "anchor") {
            try {
                let wallet_session;
                const sessionList = await anchorLink.listSessions(dapp);
                if (sessionList.length > 0) {
                    wallet_session = await anchorLink.restoreSession(dapp);
                } else {
                    wallet_session = (await anchorLink.login(dapp)).session;
                }

                AccountStore.changeAccountAddress(String(wallet_session.auth).split("@")[0])
                AccountStore.setUserData(["anchor", String(wallet_session.auth).split("@")[0], wallet_session, String(wallet_session.auth).split("@")[1]]);
            } catch (e) {
                console.error("Error while logging in through Anchor", e);
            }
        }
    }

    return (opened ? ReactDOM.createPortal(
        <div className="wallet-modal-overlay"
             onClick={(ev) => {
                 if (ev.target === ev.currentTarget) {
                     setOpened(false);
                 }
             }}>
            <div className="wallet-modal-content">
                <h4 className="wallet-modal-title">To continue please select an option</h4>
                <button className="wallet-modal-option" onClick={()=> {
                    login("wcw")
                    setOpened(false);
                }}>
                    <img src={require("../../assets/icons/wcw-icon.png").default} alt="wcw icon" className="wallet-modal-option-image-1"/>
                    <span className="wallet-modal-option-text">Wax Cloud Wallet</span>
                </button>
                <button className="wallet-modal-option" onClick={()=>{
                    login("anchor")
                    setOpened(false);
                }}>
                    <img src={require("../../assets/icons/anchor-icon.png").default} alt="anchor icon" className="wallet-modal-option-image-2"/>
                    <span className="wallet-modal-option-text">Anchor Wallet</span>
                </button>
            </div>
        </div>
        , document.body) : null)
}

export default observer(ChooseWalletModal);