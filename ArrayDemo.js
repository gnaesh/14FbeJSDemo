
    var cities=["Pune","bnglr","mum","jk"];
var nums= new Array(78,90,45,23);
var intlist=new  Array(70,10);
var add=function(...nums)
{
let sum=0;
for(let i=0;i<nums.length;i++)
    {
        sum=sum+nums[i];
        
    }
    return sum;

}
console.log('sum = '+add(70,30));
console.log('sum = '+add(70,30,60));
console.log('sum = '+add(...intlist));
//----------------------------------

var no = {empId:11 , empName:"ganesh", empSal:100.2}
let {empId,empName,empSal}=no;
console.log(`Name :
${empName}`);
console.log(no);

var addNum =(a,b)=>(a+b)
console.log(+addNum(10,20))

//-------------------------------------
function fullName(fn,mn,ln)
{
    if(mn!==undefined)
    {
        console.log(`f- ${fn} m-${mn} l-${ln}`);
    }
    else
    {
        console.log(`f- ${fn} l-${ln}`)
    }
}

fullName("ganesh","amrut", "adarkar");
fullName("ganesh", "adarkar");
fullName("ganesh",undefined,undefined);