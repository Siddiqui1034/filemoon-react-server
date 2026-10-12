import multer from "multer";
import path from "path";
import { v4 as uniqueId } from "uuid";

const root = process.cwd();

export const multerConfig = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(root, "uploads"));
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${uniqueId()}-${Date.now()}${path.extname(file.originalname)}`;
      cb(null, uniqueSuffix);
    },
  });

  const upload = multer({ storage: storage });
  return upload;
};
