import { useState, useEffect } from "react"

export default function ReactHookDemo(){
const [count , setCount]=useState(0);
const [name ,setName]=useState({firstName:"", lastName:""});
const [item, setItem]=useState([]);
console.log("ReactHookDemo Start Here");
//-----------------
useEffect(()=>{
    console.log("useEffect is executed");
},[]);
//------------------

const inCounter =()=>{
    console.log("-----------incounter Called -------------");
    setCount((preCount)=>{
        return (preCount+1);
    }
    );
}

//-----------------------------
function deCounter(){
    console.log("------------------ deCounter ---------------")
    setCount((preCount)=>{
        return (preCount-1);
    });
}
//--------------------------
function hanldeFN (event){
    console.log("-------------- handleFN called ------------");
    setName({...name,firstName:event.target.value})
}

//---------------------------
function hanldeLN (event){
    console.log("-------------- handleLN called ------------");
    setName({...name,lastName:event.target.value})
}

const addItem= function(){
    setItem([...item,{id:item.length,value: Math.random()}])
}
return(
    <div>
        ReactHookDemo....
        <button onClick={inCounter}>INcrese Count</button>
        Count :{count}
        <button onClick={deCounter}>Decrese Count</button>
        
        <br/>
        firstName: <input type="text" value={name.firstName} onChange={hanldeFN}/><br/>
        lastName:<input type="text"  value={name.lastName} onChange={hanldeLN}/><br/>
    firstName-{name.firstName}  - lastName : {name.lastName}
    <br/>
    {
    item.map((numObj,index)=>{
        return<li key={index}>{numObj.value}</li>
    }) 
    }
    </div>
)
}