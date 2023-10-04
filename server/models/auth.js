import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    email:{type:String,require:true},
    name:{type:String},
    desc:{type:String},
    joinedOne:{type:Date,default:Date.now}
})

export default mongoose.model("User",userSchema)