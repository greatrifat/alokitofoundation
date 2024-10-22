import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  phone: { type: String , unique: true },
  institution: { type: String ,default:"" },
  profession : { type: String ,default:"" },
  location: { type: String ,default:"" },
  dateOfBirth: { type: Date },
  bloodGroup: { type: String ,default:"" },
  imageUrl: { type: String ,default:"/image/default.jpg" },
  bio: { type: String ,default:"" },
  facebook: { type: String ,default:"" },
  isActive: { type: Boolean,default: true,},
}, {timestamps: true});

const Users = mongoose.models.users || mongoose.model("users", usersSchema);

export default Users;