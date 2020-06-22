import React from "react";
import './Input.css';

const Input = ({type, placeholder, value, onChange}) => {
    return (
        <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        />
    );
};

export default Input;