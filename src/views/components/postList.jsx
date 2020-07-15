import React from "react";

export default (props) => (
    <a
        href="#"
        className=" list-post list-group-item list-group-item-action flex-column align-items-start"
    >
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.title}</h5>
            <small className="text-muted">{props.time}</small>
        </div>
        <p className="mb-1">{props.content}</p>
        <footer className="d-flex justify-content-between">
            <small className="text-muted">Autor: {props.autor}</small>

            <small className="text-muted">Respondido por: {props.last}</small>
        </footer>
    </a>
);
