import React from "react";
import Unordered from "./Unordered";

function Content({items, handleClick, handleDelete}){
    return(
        <main>
            {(items.length) ? (
                <Unordered
                handleClick = {handleClick}
                handleDelete ={handleDelete}
                items = {items}
                />
            ) : (<p>Your List is Empty</p>)}
        </main>

    );
};

export default Content;