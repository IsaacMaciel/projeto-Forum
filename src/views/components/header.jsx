import React from "react";

import { Link } from "react-router-dom";
import { FaUser, FaArrowAltCircleDown } from "react-icons/fa";

import "../Dashboard/styles.css";

export default (props) => (
    <>
        <nav class="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <FaUser fontSize={"1.5rem"} color={"white"} />
                    <span> Seja bem vindo, {props.user}</span>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login">
                        <FaArrowAltCircleDown
                            fontSize={"1.5rem"}
                            color={"white"}
                        />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>
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
    </>
);
