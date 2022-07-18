var emp3= {
    empId :333,
    empName : "Ganesh",
    empSal : 2000.2,
    dispEmpInfo : function(){
        return "ID" + this.empId + " Name:" + this.empName + "Salry :" + this.empSal;
    },
    empAnnualSal : function()
    {
        return this.empSal*12
    }
}



console.log("Emp info :"+emp3.dispEmpInfo());
console.log("Emp annual "+ emp3.empAnnualSal());



var mgr= {
    deptName :"Account",
    dispMgrInfo : function()
    {
        return this .dispEmpInfo() +"dept" +this.deptName;
    }
}

//===================================
mgr.__proto__=emp3;
console.log("Emp info :"+mgr.dispEmpInfo());
console.log("Emp annual "+ mgr.empAnnualSal());
