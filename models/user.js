const mongoose = require('mongoose');

// core nodejs module to hash password string
const crypto = require('crypto');
const { builtinModules } = require('module');

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
}, {timestamps:true});


// Virtual Field
userSchema.virtual('password')
.set((password) => {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
})
.get(() => {
    return this._password;

})

userSchema.methods = {
    encryptPassword: (password) =>{
        if(!password) return '';
        try {

            return crypto.Hmac('sha1', this.salt)
                        .update(password)
                        .digest('hex')
        }
        catch (err){
            return '';
        }
    } 
}


module.exports = mongoose.model("User", userSchema);