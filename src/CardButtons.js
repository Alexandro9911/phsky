import React, {Component} from "react";

class CardButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            status: props.status
        }
    }

    render() {
        if(this.state.status === "1"){
            return (
               <div>
                   <button className="btn btn-sm btn-outline-primary">Сохранить</button>
                   <button className="btn btn-sm btn-outline-dark">Убрать</button>
                   <button className="btn btn-sm btn-outline-danger">Удалить</button>
               </div>
            );
        } else {
            return (
                <div>
                    <button className="btn btn-sm btn-outline-primary">Сохранить</button>
                    <button className="btn btn-sm btn-outline-success">Показывать</button>
                    <button className="btn btn-sm btn-outline-danger">Удалить</button>
                </div>
            );
        }
    }
}

export default CardButtons;