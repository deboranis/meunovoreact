import React from "react";
import "./Button.css"

const Button = ({texto, onClick}) => {
    return (
        <div className="btn--container">
            <button onClick={onClick}> {texto} </button>
        </div>
    )
}

export default Button;