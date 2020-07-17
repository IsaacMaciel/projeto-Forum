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
            <form className="bg-light mt-5 ">
                <div className="card-header">
                    <strong>Resposta ao tópico: Como estudar React Js</strong>
                </div>

                <div class="form-group p-3">
                    <label for="exampleFormControlTextarea1">Texto</label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                    <footer className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary">Responder</button>
                    </footer>
                </div>
            </form>
        </form>
    </div>
);
