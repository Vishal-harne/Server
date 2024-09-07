//what is the difference between req.body and req.query
//simple use for pquery parameter to access in url and to acess via post put funciton body
//



const express=require("express");
const app=express();
app.use(express.json());
app.get("/sum" , function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    const result=parseInt(a)+parseInt(b);
    res.json({
    "result":result
    }); 
})
app.listen(8000,function(){
console.log("port is running");
});