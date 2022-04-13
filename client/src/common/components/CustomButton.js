import React from "react";

const CustomButton = (props) => {
    return (
        <div onClick={props.onClick}
             className="px-3 py-1 fs-18 bg-azure fc-white br-4 mt-4 cursor-pointer">
            {props.text}
        </div>
    );
};

export default CustomButton;
