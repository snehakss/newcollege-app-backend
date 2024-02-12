const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema(
    {
        UserId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"user"
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("students",studentSchema)