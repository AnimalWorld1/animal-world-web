import './index.sass'
import {observer} from "mobx-react";
import StoreContext from "../../store/RootStore";
import ReactDOM from "react-dom";
import LoginHandler from "../../functions/login";

function ChooseWalletModal({opened, setOpened}) {
    const {AccountStore} = StoreContext();
    const loginHandler = new LoginHandler();

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
                    loginHandler.login("wcw")
                    setOpened(false);
                }}>
                    <img src={require("../../assets/icons/wcw-icon.png").default} alt="wcw icon" className="wallet-modal-option-image-1"/>
                    <span className="wallet-modal-option-text">Wax Cloud Wallet</span>
                </button>
                <button className="wallet-modal-option" onClick={()=>{
                    loginHandler.login("anchor")
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