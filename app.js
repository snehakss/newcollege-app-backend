const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const AdminRoute=require("./controller/AdminRouter")
const StudentRoute=require("./controller/StudentRouter")
const AddStudent=require("./controller/AddStudentRouter")
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://snehaks:Snehaks2000@cluster0.rauhjed.mongodb.net/newcollegeDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/admin",AdminRoute)
app.use("/api/student",StudentRoute)
app.use("/api/addstudent",AddStudent)

app.listen(3002,()=>{
    console.log("server running")
})