const mongoose=require("mongoose")

const myemp=new mongoose.Schema({
    "rollno":String,
    "name":String,
    "city":String,
    "fess":String
    
})

module.exports=mongoose.model("newEmp",myemp)