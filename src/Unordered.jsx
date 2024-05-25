import React from "react"
import Createlist from "./Createlist";

function Unordered ({items, handleClick, handleDelete}){
    return (
        <ul>
           {
                items.map((item)=>
                <Createlist item = {item}
                key={item.id}
                handleClick = {handleClick}
                handleDelete ={handleDelete}
                />
                )
            }
        </ul>
    );
};


export default Unordered;