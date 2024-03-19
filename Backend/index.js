const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const PORT = 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aruzoro64@gmail.com',
    pass: 'qnbp copx cswj dhvt'
  }
});

function createEmailContent(formData) {
  return `
    First Name: ${formData.firstName}
    Last Name: ${formData.lastName}
    Email: ${formData.email}
    Phone Number: ${formData.phoneNumber}
    Message: ${formData.message}
  `;
}

async function main(formData) {
  const mailOptions = {
    from: 'aruzoro64@gmail.com', 
    to: 'adityabadal1996@gmail.com',
    subject: "Client Site Message",
    text: createEmailContent(formData),
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
}

app.post('/api/submit', (req, res) => {
  const formData = req.body;
  console.log('Form data received:', formData);
  main(formData).catch(console.error);
  res.status(200).send('Form data received successfully!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
