import React from "react";
import {toast} from "react-toastify";

const customToast = (isSuccess, message) => {
    toast(
        <div className="align-items-center display-inline-flex p-2">
            <img className="mr-2" src={isSuccess ? "/images/green-tick.svg" : "/images/alert-icon.svg"} alt={"TID"}/>
            <div className="toast-msg">{message}</div>
        </div>, {
            closeButton: <img className="mx-2" src="/images/grey-cross.svg" alt={"TID"}/>
        });
};

export default customToast;
