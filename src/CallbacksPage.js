import React, {Component} from "react";
import StarsBlock from "./StarsBlock";

class CallbacksPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content
        }
    }

    render() {
        return (
            <div className="center-align">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Инфа пользователя. что-то вроде ника или имя фамилия</h5>
                        <StarsBlock count={"1"}/>
                        <p className="card-text">Большой текст отзыва. На отзыв может отвечать администратор, и этот ответ будет виден прямо под отзывом</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Alexandro9911</h5>
                        <StarsBlock count={"3"}/>
                        <p className="card-text">Большой текст отзыва. На отзыв может отвечать администратор, и этот ответ будет виден прямо под отзывом</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Александр Лялин</h5>
                        <StarsBlock count={"2"}/>
                        <p className="card-text">Большой текст отзыва. На отзыв может отвечать администратор, и этот ответ будет виден прямо под отзывом</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Петя Петров</h5>
                        <StarsBlock count={"5"}/>
                        <p className="card-text">Большой текст отзыва. На отзыв может отвечать администратор, и этот ответ будет виден прямо под отзывом</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default CallbacksPage;