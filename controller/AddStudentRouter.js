const express=require("express")
const bcrypt=require("bcryptjs")
const AddstudentModel = require("../model/AddstudentModel")
hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}
const router=express.Router()

router.post("/addStudents",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    const hashedPassword=await hashPasswordGenerator(password)
    data.password=hashedPassword
    let adds=new AddstudentModel(data)
    let result=await adds.save()
    res.json({
        status:"success"
    })
   
})

module.exports=router