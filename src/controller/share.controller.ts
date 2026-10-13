import { type Request, type Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const conn = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (req: Request, res: Response) => {
  try {
    const { email, subject, msg } = req.body;
    const options = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: subject,
      html: `
        <h1>${msg}</h1>
      `,
    };

    await conn.sendMail(options);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message);
      return res
        .status(500)
        .json({ message: "Error sending email", error: error.message });
    }
  }
};
