import React from 'react';
import './App.css';

import {HashRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AdminPage from "./AdminPage";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import OnlineOfferCreate from "./OnlineOfferCreate";
import HomePageAdmin from "./HomePageAdmin";
import MainpageRedactor from "./MainpageRedactor";
import ManagerPost from "./ManagerPost";
import ManagerCallBacks from "./ManagerCallBacks";
import Settings from "./Settings";

function App() {
   return (
       <div>
           <Router>
                   <Switch>
                       <Route path="/administrator">
                           <HomePageAdmin/>
                       </Route>
                       <Route path="/administrator/mainpageredactor">
                           <MainpageRedactor/>
                       </Route>
                       <Route path="/administrator/managerpost">
                           <ManagerPost/>
                       </Route>
                       <Route path="/administrator/managercallbacks">
                           <ManagerCallBacks/>
                       </Route>
                       <Route path="/administrator/settings">
                           <Settings/>
                       </Route>
                       <Route path="/onlineoffer">
                           <NavBar/>
                           <OnlineOfferCreate/>
                       </Route>
                       <Route path="/admin">
                           <AdminPage/>
                       </Route>
                       <Route path="/">
                           <NavBar/>
                           <MainPage/>
                       </Route>
                   </Switch>
           </Router>
       </div>
  );
}

export default App;
