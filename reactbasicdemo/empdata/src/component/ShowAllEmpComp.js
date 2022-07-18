import React, { Component } from 'react'
import axios from "axios";
import{BrowserRouter as Router ,Route,Link, NavLink,Switch} from 'react-router-dom';

export default class ShowAllEmpComp extends Component {
    constructor(props)
    {
        super(props)
    this.state={AllEmpData:[]}
    }
    //--------------
    componentDidMount()
        {
        axios.get("http://localhost:3000/emps")
        .then((empRes)=>{console.log("all emp data: "+empRes.data);
        this.setState({AllEmpData:empRes.data});
        })
        .catch((empError)=>{console.log("Error while fetching emp....");});
        }
    //------------------

  render() {
      var empList = this.state.AllEmpData.map((emp,index)=>{
          return(<tr key ={index}>
              <td>{emp.id}</td>
              <td>{emp.empId}</td>
              <td>{emp.empName}</td>
              <td>{emp.empSal}</td>
              <td>{emp.isMarried ? "yes":"no"}</td>
              <td><button>Delete</button></td>
              <td><Link to ={`/ShowUpdateEmpPage/${emp.id}`}>Update</Link></td>
          </tr>)
      });
    return (
      <div>Emp DAta ............
          <table border="1">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>EMPID</th>
                      <th>EMPNAME</th>
                      <th>EMPSAL</th>
                      <th>ISMARRIED</th>
                      <th>dELETE</th>
                      <th>UPDATE</th>
                  </tr>
              </thead>
              <tbody>
                  {empList}
              </tbody>
          </table>
      </div>
    )
  }
}
