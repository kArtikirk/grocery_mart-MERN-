const mongoose = require("mongoose")
var Schema= mongoose.Schema;

var productSchema =new Schema({
    name:{
        type:String,
        required: [true, "Please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required: [true, "Please enter product name"]
    },
    price:{
        type:Number,
        required: [true, "Please enter product price"],
        maxLength: [4, "Price can't exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{ 
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            },
            default:0
        }
    ],
    category:{
        type:String,
        required: [true, "Please enter product category"],
    },
    Stock:{
        type:Number,
        required: [true, "Please enter product Stock"],
        maxLength: [4, "Stock can't exceed 4 characters"],
        default: 1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,

            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Product= module.exports = mongoose.model("product",productSchema);