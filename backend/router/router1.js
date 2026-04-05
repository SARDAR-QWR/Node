const express=require("express")
const router=express.Router()
const {one,two}=require("../controllers/controller1")

router.get("/hi",one)

router.route("/hello").post(two)
module.exports=router