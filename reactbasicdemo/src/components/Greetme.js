import React, { Component } from 'react'
import Login from './Login';

export default class GreetMe extends Component {

    constructor(props){
        super(props);
        this.state = {
          message:"Happy New Year", 
          year:2022,
          cityList:["Pune","Mumbai","Banglore","Chennai"],
          empList:[
            {empId:111, empName:"Ganesh", empSal:1000},
            {empId:222, empName:"Rohan", empSal:2000},
            {empId:333, empName:"Rahul", empSal:100},
            {empId:444, empName:"sagar", empSal:9000}
          ]
      }
    }
    handleClick=()=>{
        this.setState({message:"Happy Birthday"})
    }
  render() {
    var newCityList=this.state.cityList.map((city,index)=>{
      return <h6 key={index}>City: {city}</h6>
    })

    var newEmpList=this.state.empList.map((emp,empIndex)=>{
      return <li key={empIndex}>Id:{emp.empId} Name: {emp.empName} Salary: {emp.empSal}</li>
    })
    return (
      <div>
          <p>{this.state.message} Name: {this.props.firstName} {this.props.lastName} Year: {this.state.year}</p>
            <button onClick={this.handleClick}>CLick me!</button>
          
            {newCityList}
            {newEmpList}
      </div>
    )
  }
}
