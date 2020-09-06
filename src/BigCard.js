import React, {Component} from "react";


class BigCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag : props.flag,
            text1: "",
            text2: "",
            text3: ""
        }
        this.changeText1 = this.changeText1.bind(this);
        this.changeText2 = this.changeText2.bind(this);
        this.changeText3 = this.changeText3.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount() {
        this.setState({text1: "ПН–ПТ: 9:00–21:00"});
        this.setState({text2: "СБ: 9:00–21:00"});
        this.setState({text3: "ВС: 9:00-21:00"});
    }

    changeText1(event){
        this.setState({text1: event.target.value});
    }
    changeText2(event){
        this.setState({text2: event.target.value});
    }
    changeText3(event){
        this.setState({text3: event.target.value});
    }

    onSubmitHandler(e){
        e.preventDefault();
        alert("сохранено!");
    }

    render() {
        if(this.state.flag === "1"){
            return (
                <div>
                    <div className="card bg-dark text-dark">
                        <img src={require('./images/bigcardpic.png')} className="card-img" alt="..."/>
                        <div className="card-img-overlay">
                            <div className="backgroundsmooth-big-card">
                                <div className="container">
                                    <div className='text-center'>
                                        <div className="bigtext"><h3 className="font-weight-light font-italic">Часы работы</h3></div>
                                        <div className="longtext"><h5 className="font-weight">Добро пожаловать</h5></div>
                                        <div className="longtext"><h6 className="font-weight-light">
                                            <form onSubmit={this.onSubmitHandler}>
                                                <textarea className="input-group text-center font-weight-light"
                                                          value={this.state.text1}
                                                          onChange={this.changeText1}/>
                                                <textarea className="input-group text-center font-weight-light"
                                                          value={this.state.text2}
                                                          onChange={this.changeText2}/>
                                                <textarea className="input-group text-center font-weight-light"
                                                          value={this.state.text3}
                                                          onChange={this.changeText3}/>
                                                <button className="btn btn-sm btn-outline-primary justify-content-center">
                                                    сохранить
                                                </button>
                                            </form>
                                        </h6></div>
                                    </div>
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
                        <img src={require('./images/bigcardpic.png')} className="card-img" alt="..."/>
                        <div className="card-img-overlay">
                            <div className="backgroundsmooth-big-card">
                                <div className="container">
                                    <div className='text-center'>
                                        <div className="bigtext"><h3 className="font-weight-light font-italic">Часы работы</h3></div>
                                        <div className="longtext"><h5 className="font-weight">Добро пожаловать</h5></div>
                                        <div className="longtext"><h5 className="font-weight-light">
                                            <h6>{this.state.text1}</h6>
                                            <h6>{this.state.text2}</h6>
                                            <h6>{this.state.text3}</h6>
                                        </h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default BigCard;