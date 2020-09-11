import React, {Component} from "react";

class CallBackAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: props.answer
        }
    }

    render() {
        if(this.state.answer === null || this.state.answer.length === 0){
            return null
        } else {
            return (
                <div>
                    <div className="dropdown-divider"/>
                    <h6>Ответ администратора: {this.state.answer}</h6>
                </div>
            );
        }

    }
}

export default CallBackAnswer;