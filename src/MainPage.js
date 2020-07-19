import React, {Component} from "react";
import ImageCard from "./ImageCard";
import DoubleCard from "./DoubleCard";
import BigCard from "./BigCard";

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
            </div>
        );
    }
}

export default MainPage;