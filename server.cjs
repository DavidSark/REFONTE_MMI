const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Ajouter ceci
require('dotenv').config();

const app = express();

// Utiliser CORS. Vous pouvez configurer les options de CORS selon vos besoins
app.use(cors());

const contactEmail = nodemailer.createTransport({
  port: 465,
  host: "mail.infomaniak.com",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post("/api", (req, res) => {
  console.log('premier console log')
  const nom = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;

  const mail = {
    from: `<${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contact form submission",
    html: `<p>Name : ${nom}</p>` +
      `<p>Email : ${email}</p>` +
      `<p>Message : ${message}</p>`
  };

  //console.log("Formulaire envoyé à l'adresse : ", mail.to);

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message sent" });
      //console.log('Envoyé avec succés');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
