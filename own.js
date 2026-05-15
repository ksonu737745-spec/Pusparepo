const express= require("express");

const mongoose=require("mongoose");
const app=express();

// ✅ MongoDB se connect hona
mongoose.connect("mongodb+srv://new19988776655_db_user:jka3wBlM9lDgfRdf@cluster0.pya3set.mongodb.net/testdb")
  .then(() => console.log("db connected"))
.catch((err)=>console.error("err"));

const userSchema=new mongoose.Schema({
name:String,
age:Number,
email:String

});

const mydata=mongoose.model("Rahuldata",userSchema);



app.get("/", async (req,res)=>{

const mycreated=await mydata.create({

name:"sonu kumar",
age:32,
email:"rk@gmail.com"

})
res.send(mycreated);
console.log(mycreated);
});

app.get("/alldata",async (req,res)=>{
const alldata=await mydata.find();
console.log(alldata);
res.send(alldata);
});

app.get("/login",(req,res)=>{

res.send("login")
});

app.get("/rahul",(req,res)=>{

res.json({sonu:"hello Rahul kumar   HHhhh",name:"monu"})
});

app.listen('3000',()=>{
console.log("port on rinning 3000 pr")
});
