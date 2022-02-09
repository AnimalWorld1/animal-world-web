import './index.sass'
import './burger-styles.sass'
import {observer} from "mobx-react";
import StoreContext from "../../store/RootStore";
import {NavLink, useLocation} from "react-router-dom";
import ChooseWalletModal from "../chooseWalletModal";
import {useEffect, useState} from "react";
import {ReactComponent as WalletUserIcon} from '../../assets/icons/wallet-user-icon.svg';
import { slide as Menu } from 'react-burger-menu'

function Header() {
    const {AccountStore} = StoreContext();
    const [modalOpened, setModalOpened] = useState(false);
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const { pathname } = useLocation();

    // handle state callback for the sidebar component
    function handleStateChange (state) {
        setSidebarOpened(state.isOpen);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="header">
            <div className="header-helper-div"/>
            <Menu left burgerButtonClassName="nav-burger" bodyClassName="body-burger-active" itemListElement="div"
            isOpen={sidebarOpened} onStateChange={(state) => handleStateChange(state)}>
                <div className="nav-burger-content">
                    <NavLink to="/" onClick={()=>setSidebarOpened(false)}
                             className={({isActive}) => (isActive ? 'header-link header-link-active' : 'header-link')}>
                        Home
                    </NavLink>
                    <NavLink to="/packs" onClick={()=>setSidebarOpened(false)}
                             className={({isActive}) => (isActive ? 'header-link header-link-active' : 'header-link')}>
                        Packs
                    </NavLink>
                    <NavLink to="/episodes" onClick={()=>setSidebarOpened(false)}
                             className={({isActive}) => (isActive ? 'header-link header-link-active' : 'header-link')}>
                        Episodes
                    </NavLink>
                    <NavLink to="/roadmap" onClick={()=>setSidebarOpened(false)}
                             className={({isActive}) => (isActive ? 'header-link header-link-active' : 'header-link')}>
                        Roadmap
                    </NavLink>
                    {AccountStore.accountAddress ?
                        <NavLink to="/staking" onClick={()=>setSidebarOpened(false)}
                                 className={({isActive}) => (isActive ? 'header-link header-link-active' : 'header-link')}>
                            Staking
                        </NavLink>
                        : ""}
                    <a href="https://animalworld-1.gitbook.io/animal-world/" target="_blank" rel="noreferrer" onClick={()=>setSidebarOpened(false)} className="header-link">
                        Whitepaper
                    </a>
                </div>
            </Menu>
            <nav className="nav-wrapper">
                <NavLink to="/"
                         className={({isActive}) => (isActive ? 'header-link header-link-active' : 'header-link')}>
                    Home
                </NavLink>
                <NavLink to="/packs"
                         className={({isActive}) => (isActive ? 'header-link header-link-active' : 'header-link')}>
                    Packs
                </NavLink>
                <NavLink to="/episodes"
                         className={({isActive}) => (isActive ? 'header-link header-link-active' : 'header-link')}>
                    Episodes
                </NavLink>
                <NavLink to="/roadmap"
                         className={({isActive}) => (isActive ? 'header-link header-link-active' : 'header-link')}>
                    Roadmap
                </NavLink>
                {AccountStore.accountAddress ?
                    <NavLink to="/staking"
                             className={({isActive}) => (isActive ? 'header-link header-link-active' : 'header-link')}>
                        Staking
                    </NavLink>
                    : ""}
                <a href="https://animalworld-1.gitbook.io/animal-world/" target="_blank" rel="noreferrer" onClick={()=>setSidebarOpened(false)} className="header-link">
                    Whitepaper
                </a>
            </nav>
            {AccountStore.accountAddress ?
                <div className="header-wallet">
                    <WalletUserIcon className="header-wallet-icon"/>
                    <span className="header-wallet-text">{AccountStore.accountAddress}</span>
                </div>
                : <button className="header-log-in" onClick={() => setModalOpened(true)}>Log In</button>}
            <ChooseWalletModal opened={modalOpened} setOpened={setModalOpened}/>
        </div>
    )
}

export default observer(Header);