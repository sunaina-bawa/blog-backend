const mongoose=require("mongoose")
const blogs=mongoose.Schema(
    {
        title:{type:String,required:true},
        content:{type:String,required:true},
        userId: String,
        timestamp:String,    
    },
    {versionKey:false}
)

const blog_model=mongoose.model('Blog',blogs)

module.exports={
     blog_model
}