const mongoose=require('../dbconnection');
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    country:{type:String,required:true},


    
});
module.exports= mongoose.model('apiuser',userSchema);
