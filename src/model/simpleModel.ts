import mongoose from "mongoose";

interface simpleModel {
  userName?: string;
  name?: string;
  email?: string;
  password?: string;
}

interface iSimple extends simpleModel, mongoose.Document {}

const simpleModel = new mongoose.Schema(
  {
    userName: { type: String, required: [true, "Please provide a username"] },
    name: { type: String, required: [true, "Please provide a name"] },
    email: { type: String, required: [true, "Please provide an email"] },
    password: { type: String, required: [true, "Please provide a password"] },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<simpleModel>("user", simpleModel);
