import React, { Component } from 'react'
import axios from 'axios';
export default class ShowAddEmpPageComp extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            empId:"",
            empName:"",
            empSal:"",
            isMarried:false,
            empObj:{empId:0.0,empName:"",empSal:0.0,isMarried:false}
        }
    }
    //--------------------------------
handleSubmit=(event)=>{
  event.preventDefault();
//   let tempEmpObj={"empId":this.state.empId,
//   "empName":this.state.empName,
// "empSal":this.state.empSal,
// "isMarried":this.state.isMarried
// }
axios.post("http://localhost:3000/emps",this.state.empObj)
.then((empRes)=> {alert("Data inserted");})
.catch((empErr)=>{alert("Error in insertion");});
// this.setState({empObj:tempEmpObj});
alert("id: "+this.state.empObj.empId + " Name"+
this.state.empObj.empSal +" salary : "+
this.state.empObj.isMarried + "married");
}
//------------------
handleChange=(event)=>{
  const {name,value,type,checked}=event.target;
  if(type=== "checkbox")
  {
    this.setState({[name]:checked});
    this.setState(prevState=>({
      empObj:{...prevState.empObj,[name]:checked}
    }))
  }
  else
  {
    this.setState({[name]:value});
    this.setState(prevState=>({
      empObj:{...prevState.empObj,[name]:value}
    }))
  }
}
//-----------------------
  render() {
    
    return (
      <div>Add EMp........
          <form onSubmit={this.handleSubmit}>
              EMPID:<input type="text" name="empId"
              onChange={this.handleChange} required/><br/>
              EMP NAME:<input type="text" name="empName"
              onChange={this.handleChange} required/><br/>
              EMPSAL:<input type="text" name="empSal"
              onChange={this.handleChange} required/><br/>
            <input type="submit" value="ADD EMP"></input><br/>
            isMarried:<input type="checkbox" name="isMarried"
            checked={this.state.isMarried} onChange={this.handleChange}></input>
          </form>
          <h4>id:{this.state.empId} - name :{this.state.empName}- salary :{this.state.empSal}</h4>
      </div>
    )
  }
}
