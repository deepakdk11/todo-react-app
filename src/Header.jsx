import React from "react";
import img from "./assets/Header.jpg";
import img2 from "./assets/Header1.jpg";
import { FaGithub } from "react-icons/fa6";

function Header(){
    const date = new Date();
    const cDate = date.getDate();
    const cMonth = date.getMonth();
    const cYear = date.getFullYear();
    
    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return(
        <header>
            <div className="container">
                <p>{cDate<9? "0" + cDate : cDate}</p>
                <div className="inner">
                    <p>{monthArray[cMonth]}</p>
                    <p>{cYear}</p>
                </div>
            </div>
            <h1>TO-DO-LIST</h1>
            <a href="#" target="_blank"><FaGithub size={30} /></a>
            <img src={img} alt="Hills" />
            <img className="img2" src={img2} alt="Hills" />
            
        </header>
    );
};

export default Header;