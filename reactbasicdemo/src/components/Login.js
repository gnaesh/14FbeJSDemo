import React, { useState } from "react";

export default function Login(props){
    const[isLoggedIn, SetLoggedIn]= useState(false);
    let [buttonText , setButtonCaption]=useState("IN");
let [text ,setText]=useState("Logout");
    //================
    SetLoggedIn(!isLoggedIn);

    const hadleLogEvent=()=>{
        setButtonCaption("OUT")
        let data;
        if(isLoggedIn)
        {
            data ="Logout";
        }
        else
    {
        data= "Login";
    }
    setButtonCaption(data)
    setText(data);
    }
    return(
        <div>
            <h5>You are Logged {text}</h5>
            <button onClick={hadleLogEvent}> Log{buttonText}
            </button>
        </div>
    )
}


