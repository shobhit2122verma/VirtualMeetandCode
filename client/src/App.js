import React, { useEffect } from 'react';
import './App.css';
import Meet from './Components/Meet/Meet';
import Join from './Components/Join/Join';
import Home from './Components/Home/Home';
import { ContextProvider } from './SocketContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoginButton from './Login';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  useEffect(() => {
    if (!navigator.onLine) alert('Connect to internet!');
  }, [navigator]);
  // const {user,isAuthenticated} =useAuth0();
  // console.log(isAuthenticated)
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/meet' component={Meet}></Route>
          <Route path='/join' component={Join}></Route>
        </Switch>  
      </Router>
    </ContextProvider>
    // ):
    // <LoginButton />
  );
}


export default App;




// import React from "react";
// import ReactDOM from "react-dom";
// import { Auth0Provider } from "@auth0/auth0-react";
// import Main from "./Main";

// function App(){
// return (
// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-pcvjs7cx.us.auth0.com"
//     clientId="8R5HfYTpDHKSMIkbcV40eMGziePKJtAT"
//     redirectUri={window.location.origin+"/"}
//   >
//     <Main />
//   </Auth0Provider>,
//   document.getElementById("root")
// )
// )
// }