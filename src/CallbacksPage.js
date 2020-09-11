import React, {Component} from "react";
import StarsBlock from "./StarsBlock";
import CardButtons from "./CardButtons";
import CallBackAnswer from "./CallBackAnswer";

class CallbacksPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content
        }
    }

    render() {
        if(JSON.parse(window.sessionStorage.getItem("callbacks")) === null){
            return (
                <div className="alert alert-info">
                    Пока что тут пусто
                </div>
            );
        } else {
            let parts = Object.values(JSON.parse(window.sessionStorage.getItem("callbacks")));
            const items = parts.map((card, i) =>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{card['name_from']}</h5>
                        <StarsBlock count={card['rating']}/>
                        <p className="card-text">{card['maintext']}</p>
                        <CallBackAnswer answer={card['answer']}/>
                    </div>
                </div>
            );
            return (
                <div className="center-align">
                    {Object.values(items)}
                </div>
            );
        }
    }
}

export default CallbacksPage;