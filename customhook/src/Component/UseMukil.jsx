import React from "react";

function UseMukil(value){
    let valeFromProps = value
    window.localStorage.setItem("context",valeFromProps);
    window.sessionStorage.setItem("context",valeFromProps)
    return null 
}

export default UseMukil;