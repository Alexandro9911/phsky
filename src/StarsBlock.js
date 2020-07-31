import React, {Component} from "react";

class StarsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        }
    }

    render() {
        let coun = this.state.count
        switch (coun) {
            case "0": {
                return (
                    <div>
                        <div className="rating-mini">
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                );
            }
            case "1": {
                return (
                    <div>
                        <div className="rating-mini">
                            <span className="active"/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                );
             }
            case "2": {
                return (
                    <div>
                        <div className="rating-mini">
                            <span className="active"/>
                            <span className="active"/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                );
            }
            case "3": {
                return (
                    <div>
                        <div className="rating-mini">
                            <span className="active"/>
                            <span className="active"/>
                            <span className="active"/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                );
            }
            case "4": {
                return (
                    <div>
                        <div className="rating-mini">
                            <span className="active"/>
                            <span className="active"/>
                            <span className="active"/>
                            <span className="active"/>
                            <span/>
                        </div>
                    </div>
                );
            }
            case "5": {
                return (
                    <div>
                        <div className="rating-mini">
                            <span className="active"/>
                            <span className="active"/>
                            <span className="active"/>
                            <span className="active"/>
                            <span className="active"/>
                        </div>
                    </div>
                );
            }

        }
    }
}

export default StarsBlock;