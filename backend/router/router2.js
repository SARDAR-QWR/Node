const express=require("express")
const b=express.Router()

b.get("/hello",(req,res)=>{
    res.send("iam from router2 file")
})

module.exports=b