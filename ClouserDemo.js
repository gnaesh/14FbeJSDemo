// var showCount=(
//     function ()
//     {
//        var counter=0;
//        return function()
//        {
//            counter=counter+1;
//            return counter;
//        }
//     }
//     )();
    
//     console.log("....."+showCount());
//     console.log("type of showCount "+ typeof(showCount));
//     var xx=showCount();
//     console.log("type of xx "+ typeof(xx));

//-----------------------------------------------------

var outerFun =(
    function(a){
        var innerFun=function(b){
            let sum= a+b;
            console.log("Sum of a="+a +" and b ="+b +" Is"+sum);
            return "Sum of a="+a +" and b ="+b +" Is"+sum
        }
        return innerFun;
    }
)(30);

console.log("....."+outerFun(20));
    console.log("type of outerFun "+ typeof(outerFun));
    var xx=outerFun(50);
    console.log("type of xx "+ typeof(xx));