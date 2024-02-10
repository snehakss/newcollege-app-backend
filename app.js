const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const AdminRoute=require("./controller/AdminRouter")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://snehaks:Snehaks2000@cluster0.rauhjed.mongodb.net/newcollegeDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/admin",AdminRoute)

app.listen(3001,()=>{
    console.log("server running")
})