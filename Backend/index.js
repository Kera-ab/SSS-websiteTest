const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  // Parse the request body as JSON
  const body = JSON.parse(event.body);

  // Extract individual fields from the parsed JSON
  const { firstName, lastName, email, phoneNumber, message } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aruzoro64@gmail.com',
      pass: 'qnbp copx cswj dhvt'
    }
  });

  // Define mail options
  const mailOptions = {
    from: 'aruzoro64@gmail.com', 
    to: 'adityabadal1996@gmail.com',
    subject: "Client Site Message",
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `
  };

  // Send email
  const info = await transporter.sendMail(mailOptions);
  
  console.log("Message sent: %s", info.messageId);

  // Return HTTP response
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email Sent" }),
  };
};
