const one=((req,res)=>{
    res.send("iamfrom router1 file")
})
const two=((req,res)=>{
    const {name,age}=req.body
    res.json({name})
})

module.exports={one,two}