import multer from "multer";
import path from "path";
import { v4 as uniqueId } from "uuid";

const root = process.cwd();

export const multerConfig = () => {
  const storage = multer.diskStorage({
    destination: (req, file, next) => {
      next(null, path.join(root, "uploads"));
    },
    filename: (req, file, next) => {
      const uniqueSuffix = `${uniqueId()}-${Date.now()}${path.extname(file.originalname)}`;
      next(null, uniqueSuffix);
    },
  });

  const upload = multer({ storage: storage });
  return upload;
};
