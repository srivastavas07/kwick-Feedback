import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content: string,
    createdAt: Date,
    feedbackType: string
}
const Message: Schema<Message> = new Schema({
    content:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now,
    },
    feedbackType:{
        type: String,
        default: "neutral"
        //["positive", "negative", "neutral"]
    }
})

export interface User extends Document{
    name: string,
    username: string,
    email: string,
    password: string,
    messages: Message[],
    createdAt: Date,
    isAcceptingMessage:boolean,
    verifyCode:string,
    verifyCodeExpiry:Date,
    isVerified: boolean,
}

const User:Schema<User> = new Schema({
    name:{
        type:String,
        required:[true ,"Name is required"],
    },
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address"
        ]
    },
    messages:[Message],
    verifyCode:{
        type:String,
        required:[true,"Verify code is required."],
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"Verify Code expiry is required."],
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true,
    },
    isVerified:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model("User",User);
export default UserModel;
// string is a lowercase in typescript
// TypeScript is a programming language that adds types to JavaScript, making it easier to catch errors during development and write more reliable code.
