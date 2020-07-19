import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AdminPage from "./AdminPage";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import OnlineOfferCreate from "./OnlineOfferCreate";

function App() {
   return (
       <div>
           <Router>
               <div>
                   <NavBar/>
                   <Switch>
                       <Route path="/admin">
                           <AdminPage/>
                       </Route>
                       <Route path="/onlineoffer">
                           <OnlineOfferCreate/>
                       </Route>
                       <Route path="/">
                           <MainPage/>
                       </Route>
                   </Switch>
               </div>
           </Router>
       </div>
  );
}

export default App;
