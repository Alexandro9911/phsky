import React, {Component} from "react";

class DoubleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag : props.flag,
            text1: "",
            text2: ""
        }
        this.changeText1 = this.changeText1.bind(this);
        this.changeText2 = this.changeText2.bind(this);
    }

    componentDidMount() {
        this.setState({text1 : "С момента основания в 2000 году «Двери. Окна. От завода ОАО \"АВАНГАРД\"» славится своим добросовестным и внимательным отношением к работе и клиентам. Именно стремление к совершенству позволило нам развить бизнес до сегодняшнего уровня."});
        this.setState({text2:  "Мы считаем, что клиенты всегда на первом месте, а это значит, что они должны получать качественные товары и услуги. Свяжитесь с нами, чтобы узнать, что мы предлагаем."});
    }
    changeText1(event){
        this.setState({text1: event.target.value});
    }

    changeText2(event){
        this.setState({text2: event.target.value});
    }

    onSubmitHandler(e){
        e.preventDefault();
        alert("Сохранено!");
    }

    render() {
        if(this.state.flag === "1"){
            return (
                <div className="card-second">
                    <div className="card-second text-center">
                        <div className="App">
                            <div className="grid-container-double">
                                <div className="card-one">
                                    <h1 className="font-weight-light font-italic">О компании</h1>
                                    <br/>
                                    <form onSubmit={this.onSubmitHandler}>
                                        <textarea className="textarea1 input-group text-center font-weight-light"
                                        value={this.state.text1}
                                        onChange={this.changeText1}/>
                                        <textarea className="textarea1 input-group text-center font-weight-light"
                                        value={this.state.text2}
                                        onChange={this.changeText2}/>
                                        <button className="btn btn-sm btn-outline-primary justify-content-center">
                                            сохранить
                                        </button>
                                    </form>
                                </div>
                                <img className="img" src={require('./images/man.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="card-second">
                    <div className="card-second text-center">
                        <div className="App">
                            <div className="grid-container-double">
                                <div className="card-one">
                                    <h1 className="font-weight-light font-italic">О компании</h1>
                                    <br/>
                                    <h6 className="font-weight-light">{this.state.text1}</h6>
                                    <h6 className="font-weight-light">{this.state.text2}</h6>
                                </div>
                                <img className="img" src={require('./images/man.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default DoubleCard;