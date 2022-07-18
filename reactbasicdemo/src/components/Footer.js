import React from "react";

function Footer(props){
    return(
        <div>
           <hr color="Blue" size="5px"> 
           </hr>
           @Copyright of Capgemmini : {props.country}{props.brand}
           <a href="">About us</a>
        </div>
    )
}
export default Footer;