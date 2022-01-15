const mongoose = require('mongoose');

// core nodejs module to hash password string
const crypto = require('crypto');

const uuidv1 = reuqire('uuid/v1');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        // mongose will remove spaces from last anbd first 
        trim: true,
        required: true,
        maxlength: 200,
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique:true, 
    },
    hashed_password:{
        type: String,
        required: true,
        maxlength: 20,
    },
    about:{
        type: String,
        trim: true,
        maxlength: 500,
    },
    salt:String,
    role:{
        type:Number,
        // here 0 is autheticated user and 1 is admin 
        default:0,
    },
    history:{
        type:Array,
        default:[]
    },
}, {timestamps:true})   