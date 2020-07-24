import React, {Component} from "react";
import CallbacksPage from "./CallbacksPage";


class Callbacks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currpage: 1,
            content: ""
        }
        this.onClickNextHandler = this.onClickNextHandler.bind(this);
        this.onClickPrevHandler = this.onClickPrevHandler.bind(this);
    }

    onClickNextHandler(){

    }

    onClickPrevHandler(){
        if(this.state.currpage === 1){

        } else {
             let curr = this.state.currpage -1;
            this.setState({currpage : curr})

        }
    }

    render() {
        return (
            <div>
                <div>
                    <CallbacksPage content={this.state.content}/>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item"><a className="page-link" onClick={this.onClickPrevHandler}>Предыдущая</a>
                        </li>
                        <li className="page-item"><a className="page-link">{this.state.currpage}</a></li>
                        <li className="page-item"><a className="page-link" onClick={this.onClickNextHandler}>Следующая</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Callbacks;