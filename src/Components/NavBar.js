import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import React from "react";
import "../styles/Navbar.css";
//Pages
import LogIn from "./LogIn";
import logo from "../assets/logo.webp";
import { Overlay } from "react-portal-overlay";
//import Transaction from "./Transaction"
const Assets= require('../assets/assets')

function NavBar(props) {
  const [click, setClick] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [loggedin, setLogin] = React.useState(false);
  const [balance, setBalance] = React.useState(false);

  const handleClick = () => setClick(!click);
  const handleLogin = () => setLogin(true);
  const Close = () => setClick(false);

  const GetBalance=()=>
  {setBalance(true);
    console.log(Assets.wax);
    console.log(Assets.awc);
  };

  const showPopup = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img
              src={logo}
              style={{
                position: "absolute",
                left: "0.1em",
                top: "0.1em",
                height: "2.5em",
                width: "2.5em",
              }}
              alt="Animal World"
            />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/episodes"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Episodes
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to={loggedin?"/staking":"/"}
                activeClassName="login"
                className="nav-links"
                onClick={loggedin?handleClick:showPopup}
              >
                {loggedin?"Staking":"Login"}
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
      <Overlay
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnClick
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogIn onClose={() => setIsOpen(false)} handleLogin={() => setLogin(true)} GetBalance={() => GetBalance(true)}sessionHandler={props.sessionHandler} />
        
      </Overlay>
    </div>
  );
}

export default NavBar;
