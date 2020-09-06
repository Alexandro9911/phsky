import React, {Component} from "react";
import IconsBlock from "./IconsBlock";

class MessageToUS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag : props.flag,
            bigtext: "",
            adresText: "",
            emailText: "",
            telephonsText: ""
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        this.changeAdr = this.changeAdr.bind(this);
        this.changeBigText = this.changeBigText.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeTeleph = this.changeTeleph.bind(this);
        this.submitUpdates = this.submitUpdates.bind(this);
    }

    componentDidMount() {
        this.setState({bigtext : "«Двери. Окна. От завода ОАО \"АВАНГАРД\"» сделает для вас больше, чем вы ожидаете. У вас есть вопрос, комментарий или пожелание? Свяжитесь с нами, мы с удовольствием поможем."});
        this.setState({adresText : "СПб, Кондратьевский пр., 72"});
        this.setState({emailText : "danila.shestakov.1999@gmail.com"});
        this.setState({telephonsText :"+79119980800 +79119980080"} );

    }


    changeBigText(event){
        this.setState({bigtext: event.target.value});
    }

    changeEmail(event){
        this.setState({adresText: event.target.value});
    }

    changeAdr(event){
        this.setState({emailText: event.target.value});
    }

    changeTeleph(event){
        this.setState({telephonsText: event.target.value});
    }

    submitUpdates(e){
        e.preventDefault();
        alert("Сохранено!");
    }

    async onSubmitHandler(e){
        e.preventDefault();
 }


    render() {
        if(this.state.flag === "1"){
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
                                                <textarea className="input-group font-weight-light font-italic text-center"
                                                          value={this.state.bigtext}
                                                          onChange={this.changeBigText}/>
                                            </h6>
                                            <br/>
                                            <h6>
                                                <textarea className="input-group font-weight-light font-italic text-center"
                                                          value={this.state.adresText}
                                                          onChange={this.changeAdr}/>
                                            </h6>
                                            <h6>
                                                <textarea className="input-group font-weight-light font-italic text-center"
                                                          value={this.state.emailText}
                                                          onChange={this.changeEmail}/>
                                            </h6>
                                            <h6>
                                                <textarea className="input-group font-weight-light font-italic text-center"
                                                          value={this.state.telephonsText}
                                                          onChange={this.changeTeleph}/>
                                            </h6>
                                            <button id={"2"} className="btn btn-sm btn-outline-primary justify-content-center">
                                                сохранить
                                            </button>
                                        </form>
                                        <IconsBlock/>
                                    </div>
                                    <form onSubmit={this.onSubmitHandler}>
                                        <div className="form-inner form-group">
                                            <div className="form-row">
                                                <div className="col"><input type="text" placeholder="Имя" required={true}/></div>
                                                <div className="col"><input type="text" placeholder="Адрес"/></div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col"><input type="text" placeholder="Эл. почта" required={true}/></div>
                                                <div className="col"><input type="text" placeholder="Телефон" required={true}/></div>
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
                                                <div className="col"><input type="text" placeholder="Имя" required={true}/></div>
                                                <div className="col"><input type="text" placeholder="Адрес"/></div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col"><input type="text" placeholder="Эл. почта" required={true}/></div>
                                                <div className="col"><input type="text" placeholder="Телефон" required={true}/></div>
                                            </div>
                                            <input type="text" placeholder="Тема" required={true}/>
                                            <textarea placeholder="Ваш комментарий"/>
                                            <button type="submit">Отправить</button>
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