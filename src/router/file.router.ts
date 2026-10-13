import { Router } from "express";
import {
  createFile,
  deleteFile,
  downloadFile,
  fetchFiles,
} from "../controller/file.controller.ts";

const fileRouter = Router();

fileRouter.post("/", createFile);
fileRouter.get("/", fetchFiles);
fileRouter.delete("/:id", deleteFile);
fileRouter.get("/download/:id", downloadFile);

export default fileRouter;
