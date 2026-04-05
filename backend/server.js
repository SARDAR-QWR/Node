const express=require("express")
const cors=require("cors")
const a=require("./router/index")
const app=express()
app.use(cors())
app.use(express.json())
app.listen(5000,(err,res)=>{
    if(err){
        console.log("server not started")
    }
    else{
      console.log('server started')
    }
})
app.use("/ab",a)


