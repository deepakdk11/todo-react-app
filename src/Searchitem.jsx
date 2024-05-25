import React from "react";

const Searchitem = ({searchItem, setSearchItem}) => {
    return(
        <form className="searchBox" onSubmit={(e)=> e.preventDefault()}>
            <input type="text" 
            role="searchBox"
            placeholder="Search"
            value={searchItem}
            onChange={(e)=>setSearchItem(e.target.value)}
            />
        </form>
    );
};

export default Searchitem;