import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fixed-top">
                <div className="navpadding">
                    <nav className="navbar navbar-light">
                        <div>
                            <h4>Phsky </h4>
                            <h6>Двери. Окна. От завода ОАО "АВАНГАРД"</h6>
                        </div>
                        <div className="flex-container">
                            <div className="flex-item">
                                <Link className="text-dark" to="/"> Главная </Link>
                            </div>
                            <div className="flex-item">
                                <Link className="text-dark" to="/onlineoffer"> Онлайн запись </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;