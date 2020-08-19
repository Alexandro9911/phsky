import React, {Component} from "react";
import MainPage from "./MainPage";
import ImageCard from "./ImageCard";
import DoubleCard from "./DoubleCard";

class MainpageRedactor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ImageCard flag = {"1"}/>
                <DoubleCard flag={"1"}/>
            </div>
        );
    }
}

export default MainpageRedactor;