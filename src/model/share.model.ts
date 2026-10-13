import { Schema, model } from "mongoose";

const shareSchema = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
    file: { type: Schema.Types.ObjectId, ref: "File", required: true },
  },
  { timestamps: true },
);

const ShareModel = model("Share", shareSchema);
export default ShareModel;
