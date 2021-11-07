import '../styles/App.css';
import NavBar from "./NavBar";
import {React, useState} from "react";
import Home from "./Home";
import About from "./About";
import Episodes from "./Episodes";
import Staking from './Staking';
import {BrowserRouter, Switch,Route,Link,NavLink} from "react-router-dom";
import Footer from './Footer';
function App() {
const [user, setUser] = useState(null)
  
  const [session, setsession] = useState(null)
  const [w_type, setType] = useState(null)
  const sessionHandler = (session,user,w_type) =>{setsession(session); setUser(user); setType(w_type)}

  return (
    <>
       <BrowserRouter>
        <NavBar sessionHandler={sessionHandler}/>
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/episodes" component={Episodes} />
            <Route path="/staking" >
              <Staking user={user} handler={session} w_type={w_type} />
              </Route>
          </Switch>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}



export default App;

