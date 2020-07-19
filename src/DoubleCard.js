import React, {Component} from "react";

class DoubleCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-second">
                <div className="card-second text-center">
                    <div className="grid-container-double">
                        <div className="card-one">
                            <div className="wrapper1">
                                <h1 className="font-weight-light font-italic">О компании</h1>
                                <br/>
                                <h5 className="font-weight-light">С момента основания в 2000 году «Двери. Окна. От
                                    завода ОАО "АВАНГАРД"» славится своим добросовестным и внимательным отношением к
                                    работе и клиентам. Именно стремление к совершенству позволило нам развить бизнес до
                                    сегодняшнего уровня.</h5>
                                <h5 className="font-weight-light">Мы считаем, что клиенты всегда на первом месте, а это
                                    значит, что они должны получать качественные товары и услуги. Свяжитесь с нами,
                                    чтобы узнать, что мы предлагаем.</h5>
                            </div>
                        </div>
                        <div className="card-two">
                            <img src={require('./images/man.png')}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoubleCard;