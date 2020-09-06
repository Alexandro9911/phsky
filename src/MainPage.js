import React, {Component} from "react";
import ImageCard from "./ImageCard";
import DoubleCard from "./DoubleCard";
import BigCard from "./BigCard";
import Deals from "./Deals";
import MessageToUS from "./MessageToUs";
import MapBlock from "./MapBlock";
import Callbacks from "./Callbacks";
import DownBar from "./DownBar";
import TopButton from "./TopButton";

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TopButton/>
                <ImageCard flag={"0"}/>
                <DoubleCard flag={"0"}/>
                <BigCard flag={"0"}/>
                <Deals flag={"0"}/>
                <MessageToUS flag={"0"}/>
                <MapBlock/>
                <Callbacks/>
                <DownBar/>
            </div>
        );
    }
}

export default MainPage;