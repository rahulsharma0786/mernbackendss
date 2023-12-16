const express=require("express")
const app=express()
const mongoose=require("mongoose")
const myemp=require("./empModel/Empmodel")
const cors=require("cors")
const DB="mongodb+srv://rkumar45650:12345@cluster0.zhkyr3s.mongodb.net/mernstack?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log("connect")
}).catch(()=>console.log("error"))
    
    app.use(express.json())
    app.use(cors())


// const middleware=(req,res,next)=>{
//     next()
// }

app.get("/",(req,res)=>{
    res.send("hello and welcome")
})
app.post("/save",myemp.newdata)
// app.get("/",middleware,(req,res)=>{
//     console.log("cybrom")
// })


app.listen(8000)


