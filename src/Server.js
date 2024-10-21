const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    email: "test@example.com",
    password: bcrypt.hashSync("password", 10),
  },
];

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "OTP for Password Reset",
    text: `Your OTP is: ${otp}`,
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const isValidPassword = bcrypt.compareSync(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id }, "secretkey", { expiresIn: "1h" });
  res.json({ token, user });
});

app.post("/send-otp", async (req, res) => {
  const { phoneNumber } = req.body;
  const otp = generateOTP();
  console.log(`OTP for ${phoneNumber}: ${otp}`);
  await sendOTP(phoneNumber, otp);
  res.json({ message: "OTP sent successfully" });
});

app.post("/reset-password", async (req, res) => {
  const { phoneNumber, otp, newPassword } = req.body;
  console.log(
    `Reset password for ${phoneNumber} with OTP ${otp} and new password ${newPassword}`
  );

  const user = users.find((user) => user.email === phoneNumber);
  if (user) {
    user.password = bcrypt.hashSync(newPassword, 10);
  }

  res.json({ message: "Password reset successfully" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});
