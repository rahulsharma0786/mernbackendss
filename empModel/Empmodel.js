const myemp=require("../empSchema/Empschema")

const newdata=(req,res)=>{
const ouremp=new myemp(req.body)

ouremp.save().then(()=>{
    console.log("data save")
    console.log(ouremp)
})   
}

// const displaydata=(req,res)=>{
// myemp.find().then((data)=>{
// res.send(data)

// })
// }


module.exports={
newdata,

}





















































