import mongoose from "mongoose";
interface User {
    name: string,
    email: string,
    password: string,
    photo: string,
    country: string,
    user_type: string,
    phone_no: string


}

const user_schema = new mongoose.Schema<User>({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: String,
    photo: String,
    country: String,
    user_type: String,
    phone_no: String


})

const user_modal = mongoose?.model('Users', user_schema)
export default user_modal