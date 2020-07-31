import React, {Component} from "react";

class MapBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8789.509103215789!2d30.387013052309857!3d59.98691287670884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469633b46aada7d1%3A0xf36cd2b3ceb8dcdd!2z0JrQvtC90LTRgNCw0YLRjNC10LLRgdC60LjQuSDQv9GALiwgNzIsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTUyNzE!5e0!3m2!1sru!2sru!4v1595517506241!5m2!1sru!2sru"
    width="100%" height="600" frameBorder="0" allowFullScreen="" aria-hidden="false"
    tabIndex="0" className="map"/>
            </div>
        );
    }
}

export default MapBlock;