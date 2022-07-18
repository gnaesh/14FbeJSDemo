var emp4 = new Object();
emp4.empId=444;
emp4.empName ="ganesh";
emp4["empSal"]=4000.4;
emp4.dispEmpInfo=function(){
    return "ID" + this.empId + " Name:" + this.empName + "Salry :" + this.empSal;
}
emp4.empAnnualSal = function()
    {
        return this.empSal*12
    }

    console.log("Emp info :"+emp4.dispEmpInfo());
console.log("Emp annual "+ emp4.empAnnualSal());


var mgr4 = Object.create(emp4);
mgr4["deptName"]="IT";
mgr4["dispMgrInfo"]=function()
{
    return this.dispEmpInfo() + "Dept: "+this.deptName;
}
console.log("Emp info :"+mgr4.dispMgrInfo());
console.log("Emp annual "+ mgr4.empAnnualSal());