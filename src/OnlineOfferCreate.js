import React, {Component} from "react";
import {Link} from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';

class OnlineOfferCreate extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="onlineoffer">
                <div id="myalert" className="alert alert-danger alert-dismissible fade show" role="alert">
                    Ууупс... Эта страничка еще не доделана. Работа кипит!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <script>
                        $(function(){
                        window.setTimeout(function () {
                            $('#myalert').alert('close');
                        }, 5000)
                    })
                        }
                    </script>
                </div>
                <h2 className="textoffer font-weight-light font-italic App">Наши предложения</h2>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a short card.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OnlineOfferCreate;