import React from "react";
import Footer from './Footer';
import Header from './Header';
import Appitems from "./Additems";
import Searchitem from "./Searchitem";
import Content from "./Content";
import "./index.css";
import "./header.css";
import "./mainContainer.css"
import { useState } from "react";

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("TO-DO-LIST")) || []);

  const [addItems, setAddItems] = useState("")

  const [searchItem, setSearchItem] = useState("")

  const newItem = (todayPlan) => {
    const id = items.length ? items[items.length - 1].id +1 : 1;
    const listAdd = {id, checked:false, todayPlan}
    const listItem = [...items, listAdd]
    setItems(listItem)
    localStorage.setItem("TO-DO-LIST", JSON.stringify(listItem))
  }; 

  function handleClick(id){
      const listItem = items.map((item)=>
        item.id===id ? {...item, checked:!item.checked}:item
      )
    setItems(listItem)
    localStorage.setItem("TO-DO-LIST", JSON.stringify(listItem))

  };

  function handleDelete(id){
      const listItem = items.filter((item)=>
        item.id!==id
      )
    setItems(listItem)
    localStorage.setItem("TO-DO-LIST", JSON.stringify(listItem))
  };

  const handleInput = (e) => {
    e.preventDefault()
    if(!addItems) return;
    console.log(addItems)
    newItem(addItems)
    setAddItems("")

  };

 return(
   <>
      <div className="top">
        <Header />
        <Appitems addItems ={addItems} setAddItems = {setAddItems} handleInput = {handleInput} />
      </div>
      <div className="mainContainer">
        <Searchitem searchItem = {searchItem} setSearchItem = {setSearchItem} />  
        <Content items = {items.filter((item) => (item.todayPlan).toLowerCase().includes(searchItem.toLowerCase()))}
        handleClick = {handleClick}
        handleDelete = {handleDelete}/>
      </div>

      <Footer />
    </>
  );
};

export default App;
