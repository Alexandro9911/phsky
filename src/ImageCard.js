import React, {Component} from "react";

class ImageCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="card bg-dark text-dark">
                    <img src={require('./images/img1.jpg')} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <div className="backgroundsmooth">
                            <div className='App'>
                                <div className="bigtext">
                                    <h2 className="font-weight-light font-italic">Заказ и монтаж. Двери. Окна. От завода ОАО "АВАНГАРД"</h2>
                                </div>
                                <div className="longtext"><h6 className="font-weight-light">«Двери. Окна. От завода ОАО "АВАНГАРД"» предлагаем вам окна и двери из материала,
                                    высокого качества ,а так же даем гарантию профессионализма наших монтажников с 10-20
                                    летним стажем работы .Работаем  для жителей города Санкт-Петербург и Лен. области  с
                                    2000 года. Умение прислушаться к пожеланиям клиентов и подстроиться у временным рамкам,
                                    выгодно отличают нас от других компаний города.
                                </h6></div>
                                <div className="btn btn-outline-secondary small">
                                    Связаться
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageCard;