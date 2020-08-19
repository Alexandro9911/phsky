import React, {Component} from "react";
import Menu from "./Menu";
import {
    useRouteMatch,
    Route,
    Switch} from "react-router-dom";
import MainpageRedactor from "./MainpageRedactor";
import ManagerPost from "./ManagerPost";
import ManagerCallBacks from "./ManagerCallBacks";
import Settings from "./Settings";

export default function HomePageAdmin() {
    let match = useRouteMatch();
    let adm = window.sessionStorage.getItem("adm");
    if(adm === null){
        alert("Не надо так");
        window.location.href = "http://localhost:3000/#/";
        return null;
    } else {
        return (
            <div className="grid-container-admin">
                <div>
                    <Menu/>
                </div>
                <div>
                    <Switch>
                        <Route path={`${match.url}/mainpageredactor`}>
                            <MainpageRedactor/>
                        </Route>
                        <Route path={`${match.url}/managerpost`}>
                            <ManagerPost/>
                        </Route>
                        <Route path={`${match.url}/managercallbacks`}>
                            <ManagerCallBacks/>
                        </Route>
                        <Route path={`${match.url}/settings`}>
                            <Settings/>
                        </Route>
                        <Route path={`${match.url}/`}>
                            <h4>Выберите что надо</h4>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}


