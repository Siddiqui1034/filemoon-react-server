// At the very top of your main file (index.js/server.js), before any Mongo import
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]); // Google DNS
// or Cloudflare: ['1.1.1.1', '1.0.0.1']
import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import userRouter from "./router/user.router.ts";
import { multerConfig } from "./utils/multer.ts";
import { createFile } from "./controller/file.controller.ts";

dotenv.config();

const ENV = process.env;
const app = express();
const port = Number(ENV.PORT ?? 8080);

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// authentication apis
app.use("/api/auth", userRouter);

// file upload api
const upload = multerConfig();
app.post("/api/upload", upload.single("file"), createFile);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: `${req.url} not found` });
});

const startServer = async () => {
  try {
    await mongoose.connect(
      `${ENV.MONGO_URL ?? "mongodb://localhost:27017"}/${ENV.DB ?? "tynode"}`,
    );
    console.log(`Database connected - ${ENV.DB ?? "tynode"}`);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Database connection failed -", ENV.DB ?? "tynode", error);
    process.exit(1);
  }
};

startServer();
