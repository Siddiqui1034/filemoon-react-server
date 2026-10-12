import express, { type Request, type Response } from "express";
import userModel from "../model/user.model.ts";

export const signup = async (req: Request, res: Response) => {
  try {
    const result = await userModel.create(req.body);
    return res
      .status(201)
      .json({ message: "User created successfully", data: result });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

const login = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
