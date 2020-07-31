import React, {Component} from "react";


class IconsBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="links">
                    <div className="link">
                        <img src={require('./images/inst.png')} alt="..."/>
                    </div>
                    <div className="link">
                        <h4><a href="#">link to inst</a></h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default IconsBlock;