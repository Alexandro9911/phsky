import React, {Component} from "react";
import IconsBlock from "./IconsBlock";

class MessageToUS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: props.flag,
            bigtext: "",
            adresText: "",
            emailText: "",
            telephonsText: "",
            username: "",
            useradres: "",
            useremail: "",
            usertheme: "",
            usertext: "",
            userteleph: ""
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        this.changeAdr = this.changeAdr.bind(this);
        this.changeBigText = this.changeBigText.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeTeleph = this.changeTeleph.bind(this);
        this.submitUpdates = this.submitUpdates.bind(this);

        this.changeUserName = this.changeUserName.bind(this);
        this.changeUserAdres = this.changeUserAdres.bind(this);
        this.changeUserEmail = this.changeUserEmail.bind(this);
        this.changeUserTheme = this.changeUserTheme.bind(this);
        this.changeUserText = this.changeUserText.bind(this);
        this.changeUserTeleph = this.changeUserTeleph.bind(this);

    }

    componentDidMount() {
        this.setState({bigtext: "«Двери. Окна. От завода ОАО \"АВАНГАРД\"» сделает для вас больше, чем вы ожидаете. У вас есть вопрос, комментарий или пожелание? Свяжитесь с нами, мы с удовольствием поможем."});
        this.setState({adresText: "СПб, Кондратьевский пр., 72"});
        this.setState({emailText: "danila.shestakov.1999@gmail.com"});
        this.setState({telephonsText: "+79119980800 +79119980080"});

    }

    changeUserText(event) {
        this.setState({usertext: event.target.value});
    }

    changeUserAdres(event) {
        this.setState({useradres: event.target.value});
    }

    changeUserEmail(event) {
        this.setState({useremail: event.target.value});
    }

    changeUserTheme(event) {
        this.setState({usertheme: event.target.value});
    }

    changeUserName(event) {
        this.setState({username: event.target.value});
    }

    changeUserTeleph(event) {
        this.setState({userteleph: event.target.value});
    }


    changeBigText(event) {
        this.setState({bigtext: event.target.value});
    }

    changeEmail(event) {
        this.setState({adresText: event.target.value});
    }

    changeAdr(event) {
        this.setState({emailText: event.target.value});
    }

    changeTeleph(event) {
        this.setState({telephonsText: event.target.value});
    }

    submitUpdates(e) {
        e.preventDefault();
        alert("Сохранено!");
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        if(this.state.flag === "0"){
            alert("Пока что эта функция недоступна");
        } else {
            let answ = '';
            let resp = await window.fetch("http://localhost/phsky/messageToUs.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: new URLSearchParams({
                    name: this.state.username,
                    adres: this.state.useradres,
                    email: this.state.useremail,
                    theme: this.state.usertheme,
                    maintext: this.state.usertext,
                    telephone: this.state.userteleph
                })
            })
                .then(response => response.text())
                .then(result => answ = result);
            if (answ === "ok") {
                alert("Ваше сообщение отправлено!");
            } else {
                alert("Возникла ошибка в обращении к базе данных. Попробуйте позже");
            }
        }
    }


    render() {
        if (this.state.flag === "1") {
            return (
                <div id="messagetous">
                    <div className="card bg-dark text-dark">
                        <img src={require('./images/messagepic.png')} className="img" alt="..."/>
                        <div className="card-img-overlay">
                            <div className="backgroundsmooth-form App">
                                <div className="container">
                                    <div className='text-center'>
                                        <form onSubmit={this.submitUpdates}>
                                            <h3 className="font-weight-light font-italic">Связаться с нами</h3>
                                            <br/>
                                            <h6 className="font-weight">
                                                <textarea
                                                    className="input-group font-weight-light font-italic text-center"
                                                    value={this.state.bigtext}
                                                    onChange={this.changeBigText}/>
                                            </h6>
                                            <br/>
                                            <h6>
                                                <textarea
                                                    className="input-group font-weight-light font-italic text-center"
                                                    value={this.state.adresText}
                                                    onChange={this.changeAdr}/>
                                            </h6>
                                            <h6>
                                                <textarea
                                                    className="input-group font-weight-light font-italic text-center"
                                                    value={this.state.emailText}
                                                    onChange={this.changeEmail}/>
                                            </h6>
                                            <h6>
                                                <textarea
                                                    className="input-group font-weight-light font-italic text-center"
                                                    value={this.state.telephonsText}
                                                    onChange={this.changeTeleph}/>
                                            </h6>
                                            <button id={"2"}
                                                    className="btn btn-sm btn-outline-primary justify-content-center">
                                                сохранить
                                            </button>
                                        </form>
                                        <IconsBlock/>
                                    </div>
                                    <form onSubmit={this.onSubmitHandler}>
                                        <div className="form-inner form-group">
                                            <div className="form-row">
                                                <div className="col"><input type="text" placeholder="Имя"
                                                                            required={true}/></div>
                                                <div className="col"><input type="text" placeholder="Адрес"/></div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col"><input type="text" placeholder="Эл. почта"
                                                                            required={true}/></div>
                                                <div className="col"><input type="text" placeholder="Телефон"
                                                                            required={true}/></div>
                                            </div>
                                            <input type="text" placeholder="Тема" required={true}/>
                                            <textarea placeholder="Ваш комментарий"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="messagetous">
                    <div className="card bg-dark text-dark">
                        <img src={require('./images/messagepic.png')} className="img" alt="..."/>
                        <div className="card-img-overlay">
                            <div className="backgroundsmooth-form App">
                                <div className="container">
                                    <div className='text-center'>
                                        <h3 className="font-weight-light font-italic">Связаться с нами</h3>
                                        <br/>
                                        <h6 className="font-weight">{this.state.bigtext}</h6>
                                        <br/>
                                        <h6>{this.state.adresText}</h6>
                                        <h6>{this.state.emailText}</h6>
                                        <h6>{this.state.telephonsText}</h6>
                                        <IconsBlock/>
                                    </div>
                                    <form onSubmit={this.onSubmitHandler}>
                                        <div className="form-inner form-group">
                                            <div className="form-row">
                                                <div className="col"><input type="text" placeholder="Имя"
                                                                            value={this.state.username}
                                                                            onChange={this.changeUserName}
                                                                            required={true}/>
                                                </div>
                                                <div className="col"><input type="text"
                                                                            value={this.state.useradres}
                                                                            onChange={this.changeUserAdres}
                                                                            placeholder="Адрес"/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col"><input type="text" placeholder="Эл. почта"
                                                                            value={this.state.useremail}
                                                                            onChange={this.changeUserEmail}
                                                                            required={true}/>
                                                </div>
                                                <div className="col"><input type="text" placeholder="Телефон"
                                                                            value={this.state.userteleph}
                                                                            onChange={this.changeUserTeleph}
                                                                            required={true}/>
                                                </div>
                                            </div>
                                            <input type="text" placeholder="Тема"
                                                   value={this.state.usertheme}
                                                   onChange={this.changeUserTheme}
                                                   required={true}/>
                                            <textarea placeholder="Ваш комментарий"
                                                      value={this.state.usertext}
                                                      onChange={this.changeUserText}
                                                      required={true}/>
                                            <button>Отправить</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default MessageToUS;