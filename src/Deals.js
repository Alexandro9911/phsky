import React, {Component} from "react";
import AddCard from "./AddCard";
import CardButtons from "./CardButtons";

class Deals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str: "",
            flag: props.flag
        }
    }

    componentDidMount = async () => {
        if( this.state.flag === "0"){
            // user page
            let answ = '';
            await window.fetch("http://localhost/phsky/getCards.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: new URLSearchParams({
                    flag: "0"
                })
            })
                .then(response => {
                    response.json().then(js => {
                        answ = js;
                        window.sessionStorage.setItem("cards", JSON.stringify(answ));
                        this.setState({str: answ})
                    });
                })
                .catch(err => console.log(err));
        } else {
            // admin page
            let answ = '';
            await window.fetch("http://localhost/phsky/getCards.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: new URLSearchParams({
                    flag: "1"
                })
            })
                .then(response => {
                    response.json().then(js => {
                        answ = js;
                        window.sessionStorage.setItem("cardsadmin", JSON.stringify(answ));
                        this.setState({str: answ})
                    });
                })
                .catch(err => console.log(err));
        }
    };

    render() {
        if(this.state.flag === "0"){
            let str = window.sessionStorage.getItem("cards");
            let cards;
            if (str === '[]' || str === null || str === undefined) {
                return (
                    <div className="wrapper2 App">
                        <div className="wrapper2">
                            <h1 className="font-weight-light font-italic">Спец Предложения</h1>
                            <br/>
                            <h5 className="font-weight-light">Подробнее о всех предложениях</h5>
                        </div>
                        <div className="alert alert-info">Активных предложений нет</div>
                    </div>
                );
            } else {
                cards = Object.values(JSON.parse(str));
                const items = cards.map((card, i) =>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{card['title']}</h5>
                            <p className="card-text">{card['maintext']}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Двери. Окна. От завода ОАО "АВАНГАРД"</small>
                        </div>
                    </div>
                );
                return (
                    <div className="wrapper2 App">
                        <div className="wrapper2">
                            <h1 className="font-weight-light font-italic">Спец Предложения</h1>
                            <br/>
                            <h5 className="font-weight-light">Подробнее о всех предложениях</h5>
                        </div>
                        <div className="card-deck">{Object.values(items)}</div>
                    </div>
                );
            }
        } else {
            let str = window.sessionStorage.getItem("cardsadmin");
            if (str === null) {
                return (
                    <div className="wrapper2 App">
                        <div className="wrapper2">
                            <h1 className="font-weight-light font-italic">Спец Предложения</h1>
                            <br/>
                            <h5 className="font-weight-light">Подробнее о всех предложениях</h5>
                        </div>
                        <div className="alert alert-info">Пока что тут пусто!</div>
                        <AddCard/>
                    </div>
                );
            } else {
               let cards = Object.values(JSON.parse(window.sessionStorage.getItem("cardsadmin")));
                const items = cards.map((card, i) =>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{card['title']}</h5>
                            <p className="card-text">{card['maintext']}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                <CardButtons ident={card['id']}
                                             status={card['active']}
                                             index={i}
                                />
                            </small>
                        </div>
                    </div>
                );
                return (
                    <div className="wrapper2 App">
                        <div className="wrapper2">
                            <h1 className="font-weight-light font-italic">Спец Предложения</h1>
                            <br/>
                            <h5 className="font-weight-light">Подробнее о всех предложениях</h5>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3">{Object.values(items)}</div>
                        <div className="dropdown-divider"/>
                        <AddCard/>
                    </div>
                );
            }
        }
    }
}

export default Deals;