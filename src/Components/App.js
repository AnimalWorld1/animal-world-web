
import '../styles/App.css';
import NavBar from "./NavBar";
import {React, useState} from "react";
import Home from "./Home";
import About from "./About";
import Episodes from "./Episodes";
import Team from "./Team";
import Terms from "./Terms";
import Roadmap from "./Roadmap";
import Token from "./Token";
import Staking from './Staking';
import {BrowserRouter, Switch,Route,Link,NavLink} from "react-router-dom";
import Footer from './Footer';
import AnimatedCursor from "react-animated-cursor"

function App() {


  const [user, setUser] = useState(null)
  const [session, setsession] = useState(null)
  const [w_type, setType] = useState(null)
  const sessionHandler = (session,user,w_type) =>{setsession(session); setUser(user); setType(w_type)}

  return (
    <>
    <BrowserRouter>
    <div className="App">
    <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
    </div>
        <NavBar sessionHandler={sessionHandler}/>
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/episodes" component={Episodes} />
            <Route path="/token" component={Token} />
            <Route path="/team" component={Team} />
            <Route path="/terms" component={Terms} />
            <Route path="/roadmap" component={Roadmap} />
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

