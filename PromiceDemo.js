var prom1= new Promise((resolve, reject)=>{
setTimeout(()=>{
    var rollNo=[90,122,133,12,50];
    reject ("Error in fetching RollNO");
},5000)
});

prom1.
then((rollNoRes)=>{console.log("promiss resolved : roll no : "+rollNoRes);}).
catch((rollNoError)=>{console.log(rollNoError);})



