import React from "react";

export default (props) => (
    <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        required
        id={props.id}
    />
);
