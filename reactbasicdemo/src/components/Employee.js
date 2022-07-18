import React, { useState } from "react";


const initialState = [{ empId: 1009, empName: 'Rahul', empSal: 9000, empDep: 'JAVA' },
{ empId: 1004, empName: 'Vikash', empSal: 11000, empDep: 'ORAAPS' },
{ empId: 1005, empName: 'Uma', empSal: 12000, empDep: 'JAVA' },
{ empId: 1001, empName: 'Sachin', empSal: 11500, empDep: 'ORAAPS' },
{ empId: 1008, empName: 'Amol', empSal: 7000, empDep: '.NET' },
{ empId: 1003, empName: 'Vishal', empSal: 17000, empDep: 'BI' },
{ empId: 1006, empName: 'Rajita', empSal: 21000, empDep: 'BI' },
{ empId: 1002, empName: 'Neelima', empSal: 81000, empDep: 'TESTING' },
{ empId: 1007, empName: 'Daya', empSal: 1000, empDep: 'TESTING' }];


const Employee = () => {
    const [employee, setEmployee] = useState([initialState]);

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [salary, setSalary] = useState(0);
    const [department, setDepartment] = useState("");

    const addEmployee = (event) => {
        event.preventDefault();

        if(id === 1 || name === "" || salary === 0 || department === "")
            return
            
        setEmployee([...employee, {
            empId: id,
            empName: name,
            empSal: salary,
            empDep: department
        }]);

        setId(0);
        setName("");
        setSalary(0);
        setDepartment("");
    }

    const compareBy = (key) => {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    };

    const sortBy = (key) => {
        let employeeCopy = [...employee];
        employeeCopy.sort(compareBy(key));
        setEmployee(employeeCopy);
    }

    return (
        <div>
            <div>
                <form>
                    <input type="number" value={id} placeholder="Enter ID" onChange={(event) => setId(event.target.value)} /> <br />
                    <input type="text" value={name} placeholder="Enter Name" onChange={(event) => setName(event.target.value)} /> <br />
                    <input type="number" value={salary} placeholder="Enter Salary" onChange={(event) => setSalary(event.target.value)} /> <br />
                    <input type="text" value={department} placeholder="Enter Department" onChange={(event) => setDepartment(event.target.value)} /> <br />
                    <button onClick={addEmployee}>Add Employee</button>
                </form>
            </div>

            <div>
                <center>
                    <table>
                        <thead>
                            <tr>
                                <th><div className="heading" onClick={() => sortBy('empId')}>ID</div></th>
                                <th><div className="heading" onClick={() => sortBy('empName')}>NAME</div></th>
                                <th><div className="heading" onClick={() => sortBy('empSal')}>SALARY</div></th>
                                <th><div className="heading" onClick={() => sortBy('empDep')}>DEPARTMENT</div></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                employee.map((emp, index) => (
                                    <tr key={index}>
                                        <td>{emp.empId}</td>
                                        <td>{emp.empName}</td>
                                        <td>{emp.empSal}</td>
                                        <td>{emp.empDep}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </center>
            </div>
        </div>
    )
}

export default Employee;