import React from "react";

import { Link } from "react-router-dom";

import "../Dashboard/styles.css";

export default (props) => (
    <ul className="nav nav-pills justify-content-center m-2">
        <li className="nav-item">
            <Link to="#" className="nav-link">
                Minhas Perguntas
            </Link>
        </li>
        <li className="nav-item">
            <Link to="#" className="nav-link">
                Perguntas Geral
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/create" className="nav-link">
                Criar post
            </Link>
        </li>
    </ul>
);
