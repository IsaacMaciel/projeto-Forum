import React from "react";

import Navbar from "../components/navbar";
import Menu from "../components/menu";

import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default (props) => (
    <div className="container">
        <Navbar user={"Isaac Araujo"} />
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <strong> Autor: Isaac Araújo</strong>
                <small className="text-muted">Há 3 horas</small>
            </div>
            <div className="card-body">
                <h5 className="card-title">Como estudar React Js</h5>
                <p className="card-text">
                    Com suporte a texto embaixo, que funciona como uma
                    introdução a um conteúdo adicional. Com suporte a texto
                    embaixo, que funciona como uma introdução a um conteúdo
                    adicional. Com suporte a texto embaixo, que funciona como
                    uma introdução a um conteúdo adicional.
                </p>
                <footer className="d-flex justify-content-between">
                    <Link to="/dash">
                        <button className="btn btn-primary">
                            <FaArrowLeft />
                        </button>
                    </Link>
                    <button className="btn btn-primary">Responder</button>
                </footer>
            </div>
        </div>
        <form action="">
            <div className="form-group">
                <div class="form-group">
                    <label
                        className="card-title"
                        for="exampleFormControlInput1"
                    >
                        Resposta ao "Como estudar React JS"
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Digite o título"
                    />
                </div>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
                <button className="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
);
