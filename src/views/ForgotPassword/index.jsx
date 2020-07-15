import React from "react";

import Input from "../components/input";

export default (props) => (
    <div className="container">
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            Esqueci a minha senha
                        </h5>
                        <form className="form-signin">
                            <div className="form-label-group">
                                <Input
                                    type={"email"}
                                    placeholder={"Informe o seu Email"}
                                    className={"form-control"}
                                    id={"inputEmail"}
                                />

                                <label htmlFor="inputEmail">
                                    {" "}
                                    Email de recuperação
                                </label>
                            </div>
                            <button
                                className="btn btn-lg btn-primary btn-block text-uppercase"
                                type="submit"
                            >
                                Recuperar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
