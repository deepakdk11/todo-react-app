import React from "react";
import { useRef } from "react";
import { IoAddCircle } from "react-icons/io5";

const Appitems = ({addItems, setAddItems, handleInput})=>{
    const inputRef = useRef()
    return(
        <form className="addItm" onSubmit={handleInput}>
            <input type="text"
            ref={inputRef}
            required
            autoFocus
            value={addItems}
            onChange={(e)=>setAddItems(e.target.value)}
            placeholder="Add Your Plans"
            />
            <button type="submit" onClick={() => inputRef.current.focus()} ><IoAddCircle size={40} /></button>
        </form>

    );
};

export default Appitems;