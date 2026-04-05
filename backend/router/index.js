const express=require("express")
const router=express.Router()
const a=require("./router1")
const b=require("./router2")
router.use("/h1",a)
router.use("/h2",b)

module.exports=router