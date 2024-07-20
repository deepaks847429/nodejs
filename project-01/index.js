const express= require("express");
const mongoose=require("mongoose");



//const users =require("./MOCK_DATA.csv");

const app=express();
const port=8000;


// conectiong mongoose

mongoose.connect(' mongodb://127.0.0.1:27017/deepak')
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log("mongodb error occured", err))


const userschema=new mongoose.Schema({
  fistName:{
    required :true,
    type: String,
  },
 lastname:{
 type:String,

 },
 email:{
  type: String,
  required:true,
  unique:true,

 },
 jobtitle:{
  type: String,

 },




})


const User=new mongoose.model("user", userschema);

// app.get("/api/users", (req, res)=>{
//   return res.json(users);
// });

// app.get('/users',(req, res)=>{
//   const html="
//   <ul>
//   ${users.map((user)=>'<li>${user.first_name}</li>').join("")}
//   </ul>"
// });

// Dynamic path parameters GET
// app.get("/api/users/:id", (req, res)=>{
//   const id=Number(req.params.id);
//   const user=users.find((useer)=>user.id===id);
// return res.json(user)});




// app.post('api/users', (req, res)=>{
//   //todo
//  return  res.json({status : "pending"});
// })

// app.patch("/api/users/:id", (req, res)=>{
//  return res.json({status :"pending"});
// })


// app.delete("/api/users/:id",(req, res)=>{
//   return res.json({status:pending});
// })


app.listen(port, ()=>{
  console.log("server started at 8000");
})