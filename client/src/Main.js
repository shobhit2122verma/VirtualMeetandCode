// import React, { useEffect } from 'react';
// import './App.css';
// import Meet from './Components/Meet/Meet';
// import Join from './Components/Join/Join';
// import Home from './Components/Home/Home';
// import { ContextProvider } from './SocketContext';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from 'react-router-dom';
// import LoginButton from './Login';
// import { useAuth0 } from '@auth0/auth0-react';

// function Main() {

//   useEffect(() => {
//     if (!navigator.onLine) alert('Connect to internet!');
//   }, [navigator]);
//   const {user,isAuthenticated} =useAuth0();
//   console.log(isAuthenticated)
//   return (
//     isAuthenticated?(
//     <ContextProvider>
//       <Router>
//         <Switch>
//           <Route path='/' component={Home} exact></Route>
//           <Route path='/meet' component={Meet}></Route>
//           <Route path='/join' component={Join}></Route>
//         </Switch>  
//       </Router>
//     </ContextProvider>
//     ):
//     <LoginButton />
//   );
// }

// export default Main;
