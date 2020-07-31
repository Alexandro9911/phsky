import React, {Component} from "react";
import ImageCard from "./ImageCard";
import DoubleCard from "./DoubleCard";
import BigCard from "./BigCard";
import Deals from "./Deals";
import MessageToUS from "./MessageToUs";
import MapBlock from "./MapBlock";
import Callbacks from "./Callbacks";
import DownBar from "./DownBar";

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ImageCard/>
                <DoubleCard/>
                <BigCard/>
                <Deals/>
                <MessageToUS/>
                <MapBlock/>
                <Callbacks/>
                <DownBar/>
            </div>
        );
    }
}

export default MainPage;