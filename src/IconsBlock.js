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
                        <a href="#"><h6>inst: alexandr.l1902</h6></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default IconsBlock;