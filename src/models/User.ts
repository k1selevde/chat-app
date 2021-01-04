import mongoose, { Schema } from "mongoose";
import validator from "validator";


export interface IUser extends Document {
    email: string;
    fullname: string;
    password: string;
    confirmed: boolean;
    avatar: string;
    confirm_hash: string;
    last_seen: Date;
    data?: IUser;
}

const UserSchema = new Schema(
    {
        email: {
            type: String,
            require: 'Email is required',
            validate: [validator.isEmail, "Invalid email"],
            unique: true
        },
        avatar: String,
        fullname: {
            type: String,
            required: 'Fullname is required'
        },
        password: {
            type: String,
            required: 'Password is required'
        },
        confirmed: {
            type: Boolean,
            default: false
        },
        confirm_hash: String,
        last_seen: {
            type: Date,
            default: new Date()
        },
    },
    {
        timestamps: true
    },
)


const UserModel = mongoose.model("User", UserSchema);

export default UserModel;