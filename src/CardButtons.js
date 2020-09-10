import React, {Component} from "react";

class CardButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ident: props.ident,
            status: props.status,
            index: props.index
        }

        this.deleteCard = this.deleteCard.bind(this);
        this.showCard = this.showCard.bind(this);
        this.hideCard = this.hideCard.bind(this);
    }

    async deleteCard(e) {
        e.preventDefault();
        let answ = '';
        let resp = await window.fetch("http://localhost/phsky/deleteCard.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                id: this.state.ident,
            })
        })
            .then(response => response.text())
            .then(result => answ = result);
        if (answ === "ok") {
            let cards = Object.values(JSON.parse(window.sessionStorage.getItem("cardsadmin")));
            let final;
            let i = 0;
            for (let card in cards) {
                if (card['id'] === this.state.ident) {
                    cards.splice(i, 1);
                    cards.toString();
                    final = JSON.stringify(cards);
                    window.sessionStorage.setItem("cardsadmin", final);
                    break;
                }
                i++;
            }
            window.location.reload();
            alert("Карта удалена");
        } else {
            alert("Возникла ошибка в обращении к базе данных. Попробуйте позже");
        }
    }

    async hideCard(e) {
        this.setState({status: "0"});
        e.preventDefault();
        let answ = '';
        let resp = await window.fetch("http://localhost/phsky/hideCard.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                id: this.state.ident,
            })
        })
            .then(response => response.text())
            .then(result => answ = result);
        if (answ === "ok") {
            let cards = Object.values(JSON.parse(window.sessionStorage.getItem("cardsadmin")));
            let final;
            let i = 0;
            for (let card in cards) {
                if (card['id'] === this.state.ident) {
                    card['active'] = '0';
                    cards.toString();
                    final = JSON.stringify(cards);
                    window.sessionStorage.setItem("cardsadmin", final);
                    break;
                }
                i++;
            }
            alert("Карта отключена");
        } else {
            alert("Возникла ошибка в обращении к базе данных. Попробуйте позже");
        }
    }

    async showCard(e) {
        e.preventDefault();
        this.setState({status: "1"});
        let answ = '';
        let resp = await window.fetch("http://localhost/phsky/showCard.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                id: this.state.ident,
            })
        })
            .then(response => response.text())
            .then(result => answ = result);
        if (answ === "ok") {
            var cards = Object.values(JSON.parse(window.sessionStorage.getItem("cardsadmin")));
            let final;
            let i = 0;
            for (let card in cards) {
                if (card['id'] === this.state.ident) {
                    card['active'] = '1';
                    cards.toString();
                    final = JSON.stringify(cards);
                    window.sessionStorage.setItem("cardsadmin", final);
                    break;
                }
                i++;
            }
            alert("Карта активна");
        } else {
            alert("Возникла ошибка в обращении к базе данных. Попробуйте позже");
        }
    }

    render() {
        if (this.state.status === '1') {
            return (
                <div>
                    <button className="btn btn-sm btn-outline-dark" onClick={this.hideCard}>Не показывать</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={this.deleteCard}>Удалить</button>
                </div>
            );
        } else {
            if(this.state.status === '0'){
                return (
                    <div>
                        <button className="btn btn-sm btn-outline-success" onClick={this.showCard}>Показывать</button>
                        <button className="btn btn-sm btn-outline-danger" onClick={this.deleteCard}>Удалить</button>
                    </div>
                );
            } else {
                return (
                    <div className="alert alert-warning">
                        Нет данных
                    </div>
                );
            }
        }
    }
}

export default CardButtons;