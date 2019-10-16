import React from "react";
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import AdminPage from "./pages/AdminPage/AdminPage";
import SignUpPage from './pages/SignUpPage/SignUpPage'
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts"
import About from "./pages/About/About"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import NewLoginPage from "./pages/NewLoginPage/NewLoginPage";
import NewSignUpPage from "./pages/NewSignupPage/NewSignUpPage";
import CreateKey from "./pages/CreateKey/CreateKey";
import ReceiveKey from "./pages/CreateKey/ReceiveKey";
// const routes = [
//     {
//       path: "/",
//       exact: true,
//       main: ({match}) => <HomePage match = {match}/>
//     },
//     {
//       path: "/login",
//       main: ({match}) => <LoginPage match = {match}/>
//     },
//     {
//       path: "/admin",
//       main: ({match}) => <AdminPage/>
//     },
//     {
//       path: "/resgister",
//       main: ({match}) => <SignUpPage/>
//     },
//     {
//       path: "/products",
//       main: ({match}) => <Services match = {match}/>
//     },
//     {
//       path: "/contacts",
//       main: ({match}) => <Contacts match = {match}/>
//     },
//     {
//       path: "/About",
//       main: ({match}) => <About match = {match}/>
//     },
//     {
//       path: "/profile",
//       main: ({match}) => <ProfilePage match = {match}/>
//     },
//     {
//       path: "/newlogin",
//       main: ({match}) => <NewLoginPage match = {match}/>
//     },
//     {
//       path: "/newsignup",
//       main: ({match}) => <NewSignUpPage match = {match}/>

//     },
//     {
//       path: "/createkey",
//       main: ({match,history}) => <CreateKey match = {match} history = {history}/>

//     }


const routes = [
  {
    path: "/",
    exact: true,
    main: ({match,history}) => <NewLoginPage match = {match} history = {history}/>
  },
  {
    path: "/homepage",
    main: ({match,history}) => <HomePage history = {history} match = {match} history = {history}/>
  },
  {
    path: "/login",
    main: ({match}) => <LoginPage  match = {match}/>
  },
  {
    path: "/admin",
    main: ({match,history}) => <AdminPage history = {history}/>
  },
  {
    path: "/products",
    main: ({match,history}) => <Services history = {history} match = {match}/>
  },
  {
    path: "/contacts",
    main: ({match,history}) => <Contacts history = {history} match = {match}/>
  },
  {
    path: "/About",
    main: ({match,history}) => <About history = {history} match = {match}/>
  },
  {
    path: "/receivekey",
    main: ({match,history}) => <ReceiveKey match = {match} history = {history}/>
  },
  {
    path: "/profile",
    main: ({match,history}) => <ProfilePage history = {history} match = {match}/>
  },
  // {
  //   path: "/newlogin",
  //   main: ({match}) => <NewLoginPage match = {match}/>
  // },
  {
    path: "/newsignup",
    main: ({match,history}) => <NewSignUpPage match = {match} history = {history}/>

  },
  
  {
    path: "/createkey",
    main: ({match,history}) => <CreateKey match = {match} history = {history}/>

  }
]
  
export default routes;