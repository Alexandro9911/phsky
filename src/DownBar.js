import React, {Component} from "react";

class DownBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Двери. Окна. От завода ОАО "АВАНГАРД"</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Политика конфиденциальности <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Created Alexandro9911</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default DownBar;