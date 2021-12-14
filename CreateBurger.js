import React from "react";
import BreadLower from "./BurgerComponent/BreadLower";
import BreadUpper from "./BurgerComponent/BreadUpper";
import Cheese from "./BurgerComponent/Cheese";
import Luttace from "./BurgerComponent/Luttace";
import Tomatoos from "./BurgerComponent/Tomatoos";

export default function CreateBuger(props){
    const BurgerStack = props.burgerStack.map((item,index) =>{
        switch(item){
            case "Cheese":
                return <Cheese key={index}/>;
            case "Tomatoos":
                return <Tomatoos key={index}/>
            case "Luttace":
                return <Luttace key={index} />
            default:
                return null;
        }
    });

    return (
        <div>
            <BreadUpper/>
            {BurgerStack}
            <BreadLower/>
        </div>
    );
}