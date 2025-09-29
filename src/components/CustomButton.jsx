import React from "react";
import "../MisComponentes.css";

function CustomButton({ btnText, variant, size, disabled, onClick }) {

    return (
        <button
            className={`btn btn-${variant} btn-${size}`}
            disabled={disabled}
            onClick={onClick}
        >
            {btnText}
        </button>
    )
}

export default CustomButton;