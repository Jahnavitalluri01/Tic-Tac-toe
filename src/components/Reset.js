import React from "react";
import './reset.css'
export const Reset=({resetboard})=>{
    
    return(
        <button className="reset" onClick={resetboard}>Reset</button>
    )
}