import React from "react";

import { Link } from "react-router-dom";

import "../Dashboard/styles.css";

export default (props) => (
    <ul class="nav nav-pills justify-content-center">
        <li class="nav-item">
            <Link to="#" className="nav-link">
                Minhas Perguntas
            </Link>
        </li>
        <li class="nav-item">
            <Link to="#" className="nav-link">
                Perguntas Geral
            </Link>
        </li>
    </ul>
);
