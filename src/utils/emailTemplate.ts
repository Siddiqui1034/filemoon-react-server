type GenerateEmailTemplateProps = {
  name: string;
  email: string;
  phone_no?: string;
  subject: string;
  msg: string;
};

export const generateEmailTemplate = ({
  name,
  email,
  phone_no,
  subject,
  msg,
}: GenerateEmailTemplateProps) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
    <style>
        body {
        font-family: 'Rubik', sans-serif;
        color: #333;
        }
        .container {
        max-width: 100%;
        margin: auto;
        padding: 24px;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        background-color: #f9f9f9;
        }
        .header {
        background-color: #f43f5e;
        width: 100%
        color: white;
        padding: 16px;
        border-radius: 8px 8px 0 0;
        text-align: center;
        }
        .content {
        padding: 20px;
        line-height: 1.6;
        }
        .footer {
        font-size: 12px;
        text-align: center;
        margin-top: 20px;
        color: #888;
        }
        strong {
        color: #000;
        }
    </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
             <h2>📩 New Contact Form Submission</h2>
            </div>
            <div class="content">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone_no}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${msg}</p>
            </div>
            <div class="footer">
                <p>© 2025 Nausheen Siddiqui | Software Engineer</p>
            </div>
        </div>
    </body>
</html>
  `;
};
