import React, {Component} from "react";

class TopButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

    }

    onClick(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="fixed-bottom App" onClick={this.onClick}>
                <div className="btn-sm btn-outline-primary">
                    Вверх
                </div>
            </div>
        );
    }
}

export default TopButton;