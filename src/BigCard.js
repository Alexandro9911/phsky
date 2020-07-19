import React, {Component} from "react";


class BigCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                                        <h6>ПН–ПТ: 9:00–21:00</h6>
                                        <h6>СБ: 9:00–21:00</h6>
                                        <h6>ВС: 9:00-21:00</h6>
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

export default BigCard;