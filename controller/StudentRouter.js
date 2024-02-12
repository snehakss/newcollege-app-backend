const express=require("express")
const StudentModel=require("../model/StudentModel")

const router=express.Router()

router.post("/studentLogin",async(req,res)=>{
    let data=req.body
    let addss=new StudentModel(data)
    let result=await addss.save()
    res.json({
        status:"success"
    })
})

module.exports=router