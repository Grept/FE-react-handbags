import React from "react";

function Button({name, disabled}) {
    return (
        <>
            <button
                onClick={() => {
                    console.log(name)
                }}
                disabled={disabled}>
                {name}
            </button>
        </>
    );
}

export default Button;