var sayHello= async function (name){
    return "hello",+name
}
var message = sayHello("Ganesh");
message.
then((messageRes)=> {console.log("message : "+messageRes);})
.catch((messageErr)=>{console.log("message error : ");})

console.log("--------await-----------");
async function myFunction(){
    let Promise = new Promise((reslove , reject)=>{
        setTimeout(() => {
            reslove("Done");
        }, 10000);
    });

    let result = promise;
    console.log("...."+result);
}

myFunction();
console.log("Program end here");