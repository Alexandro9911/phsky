import React, {Component} from "react";
import {Link} from "react-router-dom";
import $ from "jquery";

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredLogin: "",
            enteredPassw: "",
            valid: false
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswChange = this.onPasswChange.bind(this);
    }


    onLoginChange(event){
        this.setState({enteredLogin: event.target.value});
    }
    onPasswChange(event){
        this.setState({enteredPassw: event.target.value});
    }

    onSubmitHandler(e){
        e.preventDefault();
        // пока что так, потом добавлю проверку с сервера на пароли администратора
        if(this.state.enteredLogin === "Alexandro" && this.state.enteredPassw === "1234"){
            window.sessionStorage.setItem("adm",this.state.enteredLogin);
            window.location.href = "http://localhost:3000/#/administrator";
        } else {
           alert("Неверный логин или пароль");
        }
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="wrapper3">
                        <div className="card border-info">
                            <div className="card-header">Вход</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmitHandler}>
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Логин</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputEmail3"
                                                   required={true}
                                                   value={this.state.enteredLogin}
                                                   onChange={this.onLoginChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword3"
                                               className="col-sm-2 col-form-label">Пароль</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword3"
                                                   required={true}
                                                   value={this.state.enteredPassw}
                                                   onChange={this.onPasswChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col">
                                                <button className="btn btn-primary">Войти</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPage;