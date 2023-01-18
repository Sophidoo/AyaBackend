import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:[true, "Firstname is needed"]
    },
    lastname: {
        type:String,
        required:[true, "Lastname is needed"]
    },
    profilephoto: {
        type:String,
    },
    email: {
        type:String,
        required:[true, "Firstnae is needed"]
    },
    password: {
        type:String,
        required:[true, "password is needed"]
    },
    isBlocked: {
        type:Boolean,
        default:false
    },
    isAdmin: {
        type:Boolean,
        default:false
    },
    role: {
        type:String,
        enum:["Admin", "Editor", "Guest"]
    },
    views: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    followers: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    following: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    post: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ],
    comments: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ],
    award: {
        type:String,
        enum:["Bronze", "Silver", "Gold"],
        default:"Bronze"
    }
},
{
    timestamps: true,
    toJSON: {virtuals: true}
});


const User = mongoose.model("User", userSchema)

export default User;


