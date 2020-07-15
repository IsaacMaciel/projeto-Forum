import React from "react";

import { FaUser, FaArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default (props) => (
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
                    <FaArrowAltCircleDown fontSize={"1.5rem"} color={"white"} />
                    <span>Logout</span>
                </Link>
            </li>
        </ul>
    </nav>
);
