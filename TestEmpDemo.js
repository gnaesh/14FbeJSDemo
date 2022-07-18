class Employee
{
    static empCount=0;
    constructor(){
        this._empId_=0;
        this._empName_="";
        this.empSal=0.0;
    }
    get empId(){
        console.log(" getter empId invoked");
        return this._empId_
    }
    set empId(eid){
        console.log(" setter empId invoked");
     this._empId_=eid;
    }

    get empName(){
        console.log(" getter empName invoked");
        return this.empName
    }
    set empName(ename){
        console.log(" setter empName invoked");
     this._empId_=empName;
    }

    getempSal(){
        console.log(" getter empSal invoked");
        return this.empSal
    }
    setempSal(sal){
        console.log(" setter empId invoked");
     this.empSal=sal;
    }

    disEmpInfo(){
        return"ID: "+this._empId_+ " Name"+this._empName_+ " Sal:"+this.empSal;
    }
}

//---------------------------
var emp1= new Employee();
emp1._empId_=123;
emp1._empName_="ganesh";
emp1.setempSal(100.2);
console.log("---------------------");
console.log("ID" + emp1._empId_+ " Name:" + emp1._empName_ + "Salry :" + emp1.getempSal());





