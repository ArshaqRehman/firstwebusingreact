import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: String,
  secondname: String,
  email: String,
  password: String,
  confirmpassword: String
});

export const UserModel = mongoose.model("User", userSchema);