const http=require("http");
const fs=require("fs");
const express=require("express");
const url= require("url");


const app=express();
app.get('/', (req, res)=>{
  return res.send("hello from home page");

})
app.get('/about', (req, res)=>{
  return res.send("hello form about appge");});

  

  const myserver=http.createServer(app);
// const myserver=http.createServer((req, res)=>{
  
//   console.log("new request received");
//   res.end("hello from server");
// });

myserver.listen(8000,()=>{
  console.log("server started");
});
