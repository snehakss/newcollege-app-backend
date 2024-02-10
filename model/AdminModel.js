const mongoose=require("mongoose")

const AdminSchema=new mongoose.Schema(
    {
        username:String,
        password:String
    }
)

const AddMarksSchema=new mongoose.Schema(
    {
        sub1:String,
        sub2:String,
        sub3:String,
        sub4:String,
        sub5:String
    }
)

module.exports=mongoose.model("AddMarks",AddMarksSchema)
module.exports=mongoose.model("Admins",AdminSchema)