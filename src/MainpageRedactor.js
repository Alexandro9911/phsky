import React, {Component} from "react";
import MainPage from "./MainPage";
import ImageCard from "./ImageCard";
import DoubleCard from "./DoubleCard";
import BigCard from "./BigCard";
import MessageToUS from "./MessageToUs";
import Deals from "./Deals";

class MainpageRedactor extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <ImageCard flag = {"1"}/>
                <DoubleCard flag={"1"}/>
                <BigCard flag={"1"}/>
                <MessageToUS flag={"1"}/>
                <Deals flag={"1"}/>
            </div>
        );
    }
}

export default MainpageRedactor;