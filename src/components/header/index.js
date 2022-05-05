import './index.sass'
import './burger-styles.sass'
import {observer} from "mobx-react";
import StoreContext from "../../store/RootStore";
import {NavLink, useLocation} from "react-router-dom";
import ChooseWalletModal from "../chooseWalletModal";
import {useEffect, useState} from "react";
import {ReactComponent as WalletUserIcon} from '../../assets/icons/wallet-user-icon.svg';
import { slide as Menu } from 'react-burger-menu'
import LoginHandler from "../../functions/login";

function Header() {
    const {AccountStore} = StoreContext();
    const [modalOpened, setModalOpened] = useState(false);
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const [logOutOpened, setLogOutOpened] = useState(false);
    const { pathname } = useLocation();
    const loginHandler = new LoginHandler();

    // handle state callback for the sidebar component
    function handleStateChange (state) {
        setSidebarOpened(state.isOpen);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(()=>{
        loginHandler.autoLogin();
    }, [])

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
                <a href="https://animalworld-1.gitbook.io/animal-world/" target="_blank" rel="noreferrer" onClick={()=>setSidebarOpened(false)} className="header-link">
                    Whitepaper
                </a>
                <a href="https://neftyblocks.com/c/animalworld1" target="_blank" rel="noreferrer" onClick={()=>setSidebarOpened(false)} className="header-link" >
                    Buy Live Pack Sale
                    </a>
            </nav>
            <a href="https://animalworldgame.io" target="_blank" rel="noreferrer" onClick={()=>setSidebarOpened(false)} className="header-play-button">
                Play Game
            </a>
        </div>
    )
}

export default observer(Header);

//0.6498