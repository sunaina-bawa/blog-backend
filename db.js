const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://shivam_m_7:jl9fwLcY8Sb6mOPF@cluster0.lzdupya.mongodb.net/?retryWrites=true&w=majority")
module.exports={
    connection
}