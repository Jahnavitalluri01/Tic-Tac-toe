import React from "react";
import './reload.css'
export const Reload=({reload})=>{
    return(
    <button className="reload" onClick={reload}>Reload</button>
    )
}