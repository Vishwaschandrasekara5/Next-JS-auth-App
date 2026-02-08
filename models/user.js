import mongoose from "mongoose";
import {Schema} from "mongoose";

const Userschema = new Schema(
    {
    
            email: {
                type: String,
                required: true,
        },
            name: {
                type: String,
                required: true,
        }
    },
    {
        timestamps: true,
    }
)

const User = mongoose.models.User || mongoose.model("User", Userschema);
export default User;