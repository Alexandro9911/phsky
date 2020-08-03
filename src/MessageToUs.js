import React, {Component} from "react";
import IconsBlock from "./IconsBlock";

class MessageToUS extends Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

  async onSubmitHandler(e){
        e.preventDefault();
 }

    render() {
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
                                    <h6 className="font-weight">«Двери. Окна. От завода ОАО "АВАНГАРД"» сделает для вас больше, чем вы ожидаете. У вас есть вопрос, комментарий или пожелание? Свяжитесь с нами, мы с удовольствием поможем.</h6>
                                    <br/>
                                    <h6>СПб, Кондратьевский пр., 72</h6>
                                        <h6>danila.shestakov.1999@gmail.com</h6>
                                        <h6>+79119980800 +79119980080</h6>
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

export default MessageToUS;