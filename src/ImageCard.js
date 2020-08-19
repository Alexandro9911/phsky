import React, {Component} from "react";

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag : props.flag,
            title: "",
            bigtext: ""
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeBigText = this.changeBigText.bind(this);
        this.titleSubmitHandler = this.titleSubmitHandler.bind(this);
        this.bigTextSubmitHandler = this.bigTextSubmitHandler.bind(this);
    }

    componentDidMount() {
        this.setState({title : "Заказ и монтаж. Двери. Окна. От завода ОАО \"АВАНГАРД\""});
        this.setState({bigtext : "«Двери. Окна. От завода ОАО \"АВАНГАРД\"» предлагаем вам окна и двери из материала, высокого качества ,а так же даем гарантию профессионализма наших монтажников с 10-20 летним стажем работы .Работаем  для жителей города Санкт-Петербург и Лен. области  с 2000 года. Умение прислушаться к пожеланиям клиентов и подстроиться у временным рамкам,\nвыгодно отличают нас от других компаний города."});
    }

    changeTitle(event){
        this.setState({title: event.target.value})
    }
    changeBigText(event){
        this.setState({bigtext: event.target.value})
    }

     titleSubmitHandler(e){
        e.preventDefault();
        alert("сохранено!");
    }

     bigTextSubmitHandler(e){
        e.preventDefault();
        alert("сохранено!");
    }


    render() {
        if(this.state.flag === "1"){
            return (
                <div>
                    <div className="card bg-dark text-dark">
                        <img src={require('./images/img1.jpg')} className="card-img" alt="..."/>
                        <div className="card-img-overlay">
                            <div className="backgroundsmooth w-75">
                                <div className='App'>
                                    <form onSubmit={this.titleSubmitHandler}>
                                        <div className="bigtext">
                                        <textarea className="input-group font-weight-light font-italic text-center"
                                                  value={this.state.title}
                                                  onChange={this.changeTitle}/>
                                            <button id={"2"} className="btn btn-sm btn-outline-primary justify-content-center">
                                                сохранить
                                            </button>
                                        </div>
                                    </form>
                                    <form onSubmit={this.bigTextSubmitHandler}>
                                        <div className="bigtext">
                                        <textarea className="transparent form-inner input-group font-weight-light text-center"
                                                  value={this.state.bigtext}
                                                  onChange={this.changeBigText}/>
                                            <button id={"2"} className="btn btn-sm btn-outline-primary justify-content-center">
                                                сохранить
                                            </button>
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
                <div>
                    <div className="card bg-dark text-dark">
                        <img src={require('./images/img1.jpg')} className="card-img" alt="..."/>
                        <div className="card-img-overlay">
                            <div className="backgroundsmooth">
                                <div className='App'>
                                    <div className="bigtext">
                                        <h2 className="font-weight-light font-italic">{this.state.title}</h2>
                                    </div>
                                    <div className="longtext"><h6 className="font-weight-light">
                                        {this.state.bigtext}
                                    </h6></div>
                                    <a href="#messagetous">
                                        <div className="btn btn-outline-secondary small" onClick={this.onClick}>
                                            Связаться
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ImageCard;