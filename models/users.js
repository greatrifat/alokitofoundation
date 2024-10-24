import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  phone: { type: String , default:"01925888670" },
  institution: { type: String ,default:"" },
  profession : { type: String ,default:"Student" },
  location: { type: String ,default:"Dhaka" },
  dateOfBirth: { type: Date, default: Date.now },
  bloodGroup: { type: String ,default:"" },
  imageUrl: { type: String ,default:"/image/default.jpg" },
  bio: { type: String ,default:"Default Bio" },
  facebook: { type: String ,default:"facebook.com/greatrifat" },
  isActive: { type: Boolean,default: true,},
}, {timestamps: true});

const Users = mongoose.models.users || mongoose.model("users", usersSchema);

export default Users;