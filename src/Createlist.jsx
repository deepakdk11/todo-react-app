import React from "react";
import { FaTrash } from "react-icons/fa";

function Createlist({item, handleClick, handleDelete}){
    return (
        <li className="items" key={item.id}>
                <input type="checkbox"
                id={item.todayPlan}
                checked={item.checked}
                onChange={()=>handleClick(item.id)}
                />
                <label htmlFor={item.todayPlan} style={(item.checked)?{textDecoration:"line-through"}:null}> {item.todayPlan} </label>
                <FaTrash
                size={20}
                className="btn"
                role="button"
                onClick={()=>handleDelete(item.id)}
                />

        </li>
    );

};

export default Createlist;