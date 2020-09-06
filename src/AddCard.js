import React, {Component} from "react";

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            maintext: ""
        }
        this.titleChange = this.titleChange.bind(this);
        this.maintextChange = this.maintextChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    titleChange(event) {
        this.setState({title: event.target.value});
    }

    maintextChange(event) {
        this.setState({maintext: event.target.value});
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        let answ = '';
        let resp = await window.fetch("http://localhost/phsky/addCard.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: new URLSearchParams({
                title: this.state.title,
                maintext: this.state.maintext
            })
        })
            .then(response => response.text())
            .then(result => answ = result);
        if (answ === "ok") {
            alert("Успешно добавлено!");
        } else {
            alert("Возникла ошибка в обращении к базе данных. Попробуйте позже");
        }
    }


    render() {
        return (
            <div className="marginer">
                <p>
                    <button className="btn btn-sm btn-outline-secondary" type="button" data-toggle="collapse"
                            data-target="#collapseExample"
                            aria-expanded="true" aria-controls="collapseExample">
                        + Добавить новую карточку
                    </button>
                </p>
                <div className="collapse" id="collapseExample">
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <textarea className="input-group text-center font-weight-light"
                                              value={this.state.title}
                                              onChange={this.titleChange}
                                              placeholder={"Заголовок"}
                                    />
                                </h5>
                                <p className="card-text">
                                    <textarea className="input-group text-center font-weight-light"
                                              value={this.state.maintext}
                                              onChange={this.maintextChange}
                                              placeholder={"Основной текст"}
                                    />
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Акция действительна до дд.мм.ггг.</small>
                            </div>
                        </div>
                        <button className="btn btn-sm btn-outline-primary justify-content-center marginer">
                            Добавить
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddCard;