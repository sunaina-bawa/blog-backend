const {userRoutes}=require("./Routes/userRoutes")
const { BlogRoutes}=require("./Routes/BlogRoutes")
const express=require("express")
const app=express()
const cors = require("cors");
app.use(cors());
const {connection}=require("./db")
app.use("/users",userRoutes)
app.use("/blogs",BlogRoutes)
app.listen(8080,async()=>{
    try{
     await   connection
     console.log("connected")
    }
    catch(err){
        res.send({"err":err.message})
    }     
})