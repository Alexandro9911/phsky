import React, {Component} from "react";
import StarsBlock from "./StarsBlock";
import MakeStars from "./MakeStars";


class MakeCallBack extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Оставьте свой отзыв</h5>
                        <form>
                        <MakeStars />
                        <p className="card-text">Напишите свое впечатление о нашей работе! Нам это тоже важно</p>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Представьтесь пожалуйста" required={true}/>
                                </div>
                                <div className="col">
                                    <input type="email" className="form-control" placeholder="Укажите почту" required={true}/>
                                </div>
                            </div>
                            <br/>
                            <textarea className="input-group" placeholder="Ваш комментарий" required={true}/>
                            <br/>
                            <div className="text-center">
                                <button className="btn btn-outline-secondary small">Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default MakeCallBack;