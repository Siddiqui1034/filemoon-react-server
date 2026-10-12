import { model, Schema } from "mongoose";

const fileSchema = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
    fileType: { type: String, required: true },
    fileName: { type: String, required: true },
    fileSize: { type: Number, required: true },
  },
  { timestamps: true },
);

const FileModel = model("File", fileSchema);
export default FileModel;
