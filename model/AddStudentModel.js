const mongoose=require("mongoose")

const AddStudentSchema = mongoose.Schema(
    {
        name:String,
        rollno:String,
        adminno:String,
        collegename:String,
        parentname:String,
        phone:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("addStudents",AddStudentSchema)