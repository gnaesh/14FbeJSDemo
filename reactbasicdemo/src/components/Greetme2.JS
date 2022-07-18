import React, { useState } from 'react'

export default function GreetMe2(props) {

    const [message, setMessage]= useState("Happy new Year");
    const [year, setYear] = useState(2022);
    const [cityList, setCityList] = useState(["Mumbai", "Pune", "Delhi"]);
    const [empList, setEmpList] = useState([
      {empId:111, empName:"ganesh", empSal:1000},
      {empId:222, empName:"Rohan", empSal:2000},
      {empId:333, empName:"Rahul", empSal:100},
      {empId:444, empName:"sagar", empSal:9000}
    ])

    var newCityList=cityList.map((city,index)=>{
      return <h2 kay={index}>City: {city}</h2>
    })

    var newEmpList=empList.map((emp,empIndex)=>{
      return <li key={empIndex}>Id:{emp.empId} Name: {emp.empName} Salary: {emp.empSal}</li>
    })

    const handleClick= function(){
        setMessage("Happy Birthday");
    }
  return (
    <div>
        <p>{message} Name: {props.firstName} - {props.lastName} - Year: {year}</p>
        <button onClick={handleClick}>CLick me!</button>
        <br/>
        {newCityList}
        {newEmpList}
    </div>
  )
}
 export default GreetMe2;