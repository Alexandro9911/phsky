import React, {Component} from "react";

class Deals extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper2 App">
                <div className="wrapper2">
                    <h1 className="font-weight-light font-italic">Спец Предложения</h1>
                    <br/>
                    <h5 className="font-weight-light">Подробнее о всех предложениях</h5>
                </div>
                <div className="card-deck">
                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Название</h5>
                                <p className="card-text">Эти карточки могут изменяться автоматически администратором сайта.\
                                    Информация хранится в базе данных,  можно сюда засунуть что угодно, но только маленькое и лаконичное</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Акция действительна до дд.мм.ггг.</small>
                            </div>
                    </div>
                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Название</h5>
                                <p className="card-text">Это может быть акция, обьявление, предложение. В общем что угодно.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Акция действительна до дд.мм.ггг.</small>
                            </div>
                    </div>
                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Название</h5>
                                <p className="card-text">Эти Предложения можно динамически редактировать с админской стороны сайта</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Акция действительна до дд.мм.ггг.</small>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Deals;