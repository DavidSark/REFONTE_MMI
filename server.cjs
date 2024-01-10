const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const contactEmail = nodemailer.createTransport({
  port: 465,
  host: "mail.infomaniak.com",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
  authMethod: 'PLAIN'
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("ready to send");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  const nom = req.body.lastName + ' ' + req.body.firstName;
  const email = req.body.email;
  const message = req.body.message;

  const mail = {
    from: `"${nom}" <${process.env.EMAIL_ADDRESS}>"`,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contact form submission",
    html: `<p>Name : ${nom}</p>` +
      `<p>Email : ${email}</p>` +
      `<p>Message : ${message}</p>`
  };

  console.log("Formulaire envoyé à l'adresse : ", mail.to);

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message sent" });
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
