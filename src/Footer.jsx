import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>Copyrights &copy; {year} </footer>
    );
};

export default Footer;