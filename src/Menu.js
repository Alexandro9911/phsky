import React, {Component} from "react";
import {Link, useRouteMatch} from "react-router-dom";

export  default  function Menu() {
    let match = useRouteMatch;
    return (
        <div className="menubar">
            <div className="App">
                <div className="m-lg-1">Добро пожаловать, Александр</div>
                <Link to={`/administrator/mainpageredactor`}>
                    <div className="btn btn-outline-secondary btn-sm w-100 m-lg-1">
                        Редактор главной страницы
                    </div>
                </Link>
                {/*<Link to={`/administrator/managerpost`}>*/}
                    <div className="btn btn-outline-secondary btn-sm w-100 m-lg-1">
                        Журнал записи
                    </div>
                {/*</Link>*/}
                <Link to={`/administrator/managerpost`}>
                    <div className="btn btn-outline-secondary btn-sm w-100 m-lg-1">
                        Менеджер рассылок
                    </div>
                </Link>
                <Link to={`/administrator/managercallbacks`}>
                    <div className="btn btn-outline-secondary btn-sm w-100 m-lg-1">
                        Менеджер отзывов
                    </div>
                </Link>
                <Link to={`/administrator/settings`}>
                    <div className="btn btn-outline-secondary btn-sm w-100 m-lg-1">
                        Настройки
                    </div>
                </Link>
                <Link to={`/admin`}>
                    <div className="btn btn-outline-danger btn-sm w-100 m-lg-1" onClick={exitButton}>
                        Выход
                    </div>
                </Link>
            </div>
        </div>
    );
}

function exitButton() {
window.sessionStorage.clear();
}