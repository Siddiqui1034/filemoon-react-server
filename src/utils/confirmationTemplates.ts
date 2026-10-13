export const generateConfirmationTemplate = (name: string) => {
  return `
  <html lang="en" style="font-family: 'Rubik', sans-serif;">
  <head>
    <meta charset="UTF-8" />
    <title>Contact Confirmation</title>
    <style>
      body {
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;
        color: #333;
      }

      .container {
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
      }

      .header {
        text-align: center;
        padding-bottom: 20px;
      }

      .header h1 {
        font-family: 'Rajdhani', sans-serif;
        color: #e11d48; /* Tailwind's rose-600 */
        font-size: 28px;
        margin: 0;
      }

      .content {
        font-size: 16px;
        line-height: 1.6;
      }

      .btn {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 24px;
        background-color: #e11d48;
        color: #fff;
        border-radius: 9999px;
        text-decoration: none;
        font-weight: 500;
      }

      .footer {
        text-align: center;
        font-size: 14px;
        color: #999;
        margin-top: 40px;
      }

      .footer a {
        color: #e11d48;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1>Thank You for Reaching Out!</h1>
      </div>

      <!-- Content -->
      <div class="content">
        <p>Dear, <strong>${name}</strong>,</p>
        <p>
          Thank you for reaching out. I appreciate your message and will get back to you as soon as possible. 
          Meanwhile, feel free to explore my portfolio and download my CV for your reference.
        </p>

        <a href="https://your-portfolio-url.com" class="btn">Visit Portfolio</a>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p>
          Need to talk? Email me at
          <a href="mailto:siddiqui.techsunset@gmail.com">siddiqui.techsunset@gmail.com</a>
        </p>
        <p>© 2025 Nausheen Siddiqui | Software Engineer</p>
      </div>
    </div>
  </body>
</html>
  `;
};
