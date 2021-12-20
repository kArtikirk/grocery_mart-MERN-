const mongoose = require("mongoose")
var Schema= mongoose.Schema;

var productSchema =new Schema({
    name:{
        type:String,
        required: [true, "Please enter product name"],
        trim:true,
        // default: "name"
    },
    description:{
        type:String,
        required: [true, "Please enter product name"],
        // default: "description"
    }, 
    price:{
        type:Number,
        required: [true, "Please enter product price"],
        maxLength: [4, "Price can't exceed 8 characters"],
        // default:0
    },
   
    // images:[
    //     {
    //         public_id:{ 
    //             type:String,
    //             required:true
    //         },
    //         url:{
    //             type:String,
    //             required:true
    //         },
    //         default:0
    //     } 
    // ],
    category:{
        type:String,
        required: [true, "Please enter product category"],
        // default: "abc"
    },
   
   
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model("Product",productSchema);