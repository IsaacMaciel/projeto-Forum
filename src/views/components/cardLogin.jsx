import React from "react";

export default (props) => (
    <div className="container">
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            {props.title}
                        </h5>
                        <form className="form-signin">
                            <div className="form-label-group">
                                <Input
                                    type={"text"}
                                    placeholder={"Informe o seu Nome"}
                                    className={"form-control"}
                                    id={"inputName"}
                                />
                                <label htmlFor="inputName">Nome Completo</label>
                            </div>

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

                            <div className="form-label-group">
                                <Input
                                    type={"password"}
                                    placeholder={"Informe o seu Email"}
                                    className={"form-control"}
                                    id={"inputRePassword"}
                                />
                                <label htmlFor="inputRePassword">
                                    Digite Novamente a sua Senha
                                </label>
                            </div>

                            <button
                                className="btn btn-lg btn-primary btn-block text-uppercase"
                                type="submit"
                            >
                                {props.buttonName}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
