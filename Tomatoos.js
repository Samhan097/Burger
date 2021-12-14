import React from "react";
import Classes from "./Styles/Tomatoos.module.css";

export default function Tomatoos(){
    return(
        <div className={Classes.group}>
            <div className={Classes.Tomatoos}></div>
            <div className={Classes.Tomatoos}></div>
        </div>
    );
}