function Product(pid, pname, price, qty)
{
    this.productId = pid;
    this.productName = pname;
    this.productPrice=price;
    this.productQty=qty;
    this.disProductInfo= function()
  {
        return "ID:" + this.productId + " Name:" + this.productName + " Price:" + this.productPrice + " Product Quantity:" +this.productQty ;
    }
    this.avabileProductPrice = function()
    {
        return this.productPrice*this.productQty;
    }
}
var p1 = new Product(1,"Pen",10,1000)
var p2 = new Product(2,"Pencile",5,500)
var p3 = new Product(3,"Rubber",3,200)
var p4 = new Product(4,"Book",30,1000)

console.log( p1.disProductInfo());
console.log( p1.avabileProductPrice());

console.log( p2.disProductInfo());
console.log( p2.avabileProductPrice());

console.log( p3.disProductInfo());
console.log( p3.avabileProductPrice());

console.log( p4.disProductInfo());
console.log( p4.avabileProductPrice());

//--------------------------------------------------------------------
var greetMe = function (deptName, productName)
{
    return this.productName +" Work in "+ this.deptName;
}
var p11 = new greetMe("sell", "paper")
    console.log(greetMe);

//--------------------------------------------------------------------

function Department(deptype){
    this.deptName = deptype;
    this.disDepartmentInfo = function()
    {
        return this.disProductInfo() + " Department Name:" +this.deptName;
    }
}

Department.prototype = new Product(5 ," A4 Paper" , 2,1500)
// Department.prototype = new Product(7 ,"  Paper" , 10,3000)     New Object data is Selected.
var p5 = new Department("Purchase");
Department.prototype = new Product(6," Sheets" , 5,2000)
var p6 = new Department("Purchase");

console.log("Department info- "+ p5.disDepartmentInfo());
console.log("Department info- "+ p6.disDepartmentInfo());
