const express=require("express")
const AdminModel=require("../model/AdminModel")

const router=express.Router()



router.post("/adminlogin",async(req,res)=>{
    let data=req.body
    let adminss=new AdminModel(data)
    let result=await adminss.save()
    res.json({
        status:"success"
    })
})

router.post("/addmarks",async(req,res)=>{
    let data=req.body
    let addss=new AdminModel(data)
    let result=await addss.save()
    res.json({
        status:"success"
    })
})




module.exports=router