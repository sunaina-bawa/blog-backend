const express=require("express")
const bcrypt=require("bcrypt")
const userRoutes=express.Router()
const jwt = require("jsonwebtoken");
userRoutes.use(express.json())
const {UserModel}=require("../Model/usersModel")
userRoutes.post("/login",async(req,res)=>{
     const {email,password}=req.body
    try{
      const user=await UserModel.findOne({email})
         if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                 if(result){
                    res.send({"msg":"Login Successfully","token":jwt.sign({"userId" :user._id}, 'sunaina'),"name":user.name})
                 }
                 else{
                    res.send({"msg":"wrong Password"})
                 }
            })
         }
         else{
            res.send({"msg":"User Not Found"})
         }
    }catch(err){
        res.send({"error":err.message})
    }
      
})
userRoutes.post("/signUp",async(req,res)=>{
     const {name,email,password}=req.body;
     console.log(name,email,password)
     try{
      const user = await UserModel.findOne({ email });
      if(!user){
         bcrypt.hash(password,3,async(err,hash)=>{
            const newUser=new UserModel({name,email,password:hash})
            await newUser.save()
            res.send({"msg":"Registration Successfull"})
       })
      }
      else{
         res.status(400).send( {msg:"Email is Already Registered"});
      }
       
     }
     catch(err){
        res.send({"error":err.message})
     }
})
module.exports={
    userRoutes
}