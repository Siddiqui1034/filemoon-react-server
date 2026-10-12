import express, { type Request, type Response } from "express";

export const createFile = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const filePath = req.file.path.replace(/\\/g, "/");
    return res
      .status(200)
      .json({ message: "File uploaded successfully", path: filePath });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
