const jwt=require("jsonwebtoken")
const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decode=jwt.verify(token,"sunaina")
        if(decode){            
            req.body.userId=decode.userId            
            next()
        }
        else{
            res.status(400).send({"msg":"Please Sign In"})
          }
    }
    else{
        res.status(400).send({"msg":"Please Sign In"})
    }
}
module.exports={
    auth
}