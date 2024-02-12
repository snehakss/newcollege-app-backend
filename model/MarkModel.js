const mongoose=require("mongoose")

const marksSchema=mongoose.Schema(
    {
        sub1:String,
        sub2:String,
        sub3:String,
        sub4:String,
        sub5:String
    }
)

module.exports=mongoose.model("marks",marksSchema)