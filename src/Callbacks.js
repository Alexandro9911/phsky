import React, {Component} from "react";
import CallbacksPage from "./CallbacksPage";
import MakeCallBack from "./MakeCallBack";


class Callbacks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currpage: 1,
            content: ""
        }
        this.onClickNextHandler = this.onClickNextHandler.bind(this);
        this.onClickPrevHandler = this.onClickPrevHandler.bind(this);
    }

    async onClickNextHandler(e) {
        e.preventDefault();
        let curr = this.state.currpage + 1;
        this.setState({currpage: curr})
        let answ = '';
        let resp = await window.fetch("http://localhost/phsky/getCallbacks.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                dir: "high",
                page: this.state.currpage.toString()
            })
        })
            .then(response => response.json())
            .then(result => answ = result);
        window.sessionStorage.setItem("callbacks", JSON.stringify(answ));

    }

  async onClickPrevHandler(e){
      e.preventDefault();
        if(this.state.currpage === 1){

        } else {
            let curr = this.state.currpage -1;
            this.setState({currpage : curr})
            let answ = '';
            let resp = await window.fetch("http://localhost/phsky/getCallbacks.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: new URLSearchParams({
                    dir: "low",
                    page: this.state.currpage.toString()
                })
            })
                .then(response => response.json())
                .then(result => answ = result);
                window.sessionStorage.setItem("callbacks",JSON.stringify(answ));
        }
    }

    componentDidMount = async () => {
        let answ = '';
        await window.fetch("http://localhost/phsky/getCallbacks.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                dir: "first",
                page: this.state.currpage.toString()
            })
        })
            .then(response => {
                response.json().then(js => {
                    answ = js;
                    window.sessionStorage.setItem("callbacks", JSON.stringify(answ));
                    this.setState({content: answ})
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>
                    <div className="wrapper2"> <h1 className="font-weight-light font-italic App">Отзывы</h1></div>
                </div>
                <div className="container"><CallbacksPage content={this.state.content}/></div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item"><a className="page-link" onClick={this.onClickPrevHandler}>Предыдущая</a>
                        </li>
                        <li className="page-item"><a className="page-link">{this.state.currpage}</a></li>
                        <li className="page-item"><a className="page-link" onClick={this.onClickNextHandler}>Следующая</a>
                        </li>
                    </ul>
                </nav>
                <div className="dropdown-divider"/>
                <div className="container">
                    <div className="center-align">
                        <MakeCallBack/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Callbacks;