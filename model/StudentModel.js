const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema(
    {
        emailId:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("students",studentSchema)