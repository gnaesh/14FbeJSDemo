function Employee(eid, ename, esal)
{
    this.empId = eid;
    this.empName = ename;
    this.empSal=esal;
    this.dispEmpInfo= function()
  {
        return "ID" + this.empId + " Name:" + this.empName + "Salry :" + this.empSal;
    }
    this.empAnnualSal = function()
    {
        return this.empSal*12
    }
}

var emp1 = new Employee (111, "ganesh", 222.2)
var emp2 = new Employee (111, "gaesh", 222.2)
console.log( emp1.dispEmpInfo());
console.log( emp1.empAnnualSal());

console.log( emp2.dispEmpInfo());
console.log(+ emp2.empAnnualSal());


//-----------------------------
function Manager(depn){
    this.deptName = depn;
    this.dispMgrInfo = function()
    {
        return this.dispEmpInfo() + "Dept" +this.deptName;

    }
}
//===============================================
Manager.prototype = new Employee(455 ," Prasnna Badve" , 4000.4)
var emp4 = new Manager("Admin");

console.log("MGr info"+ emp4.dispMgrInfo());
console.log("Mgr Annual sal"+ emp4.empAnnualSal());

///-----------------------------------------------

