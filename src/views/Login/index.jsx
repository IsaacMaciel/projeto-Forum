import React from "react";
import { Link } from "react-router-dom";

import Input from "../components/input";

import "./styles.css";

export default function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                Entrar no Projeto Form
                            </h5>
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <Input
                                        type={"email"}
                                        placeholder={"Informe o seu Email"}
                                        className={"form-control"}
                                        id={"inputEmail"}
                                    />

                                    <label htmlFor="inputEmail">Email</label>
                                </div>

                                <div className="form-label-group">
                                    <Input
                                        type={"password"}
                                        placeholder={"Informe sua Senha"}
                                        className={"form-control"}
                                        id={"inputPassword"}
                                    />
                                    <label htmlFor="inputPassword">
                                        Informe sua Senha
                                    </label>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                    />
                                    <div className="options-login">
                                        <a href="">Esqueceu a Senha?</a>
                                        <Link to="/register">
                                            Criar uma conta
                                        </Link>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-lg btn-primary btn-block text-uppercase"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
