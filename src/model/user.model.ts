import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    profileImage: { type: String, default: "" },
  },
  { timestamps: true },
);

userSchema.pre("save", async function (next) {
  this.role = "user";
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.pre("save", async function (next) {
  const userCount = await model("User").countDocuments({ email: this.email });
  if (userCount > 0) {
    throw new Error("Email already exists");
  }
});

userSchema.pre("save", async function (next) {
  const userCount = await model("User").countDocuments({ mobile: this.mobile });
  if (userCount > 0) {
    throw new Error("Mobile number already exists");
  }
});

const userModel = model("User", userSchema);
export default userModel;
