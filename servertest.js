const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({ message: 'Hello world' });
});

const contactEmail = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "mail.infomaniak.com",
    auth: {
        user: process.env.EMAIL_ADRESS,
        pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
})

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("ready to send")
    }
})


app.post("/api/contact", bodyParser.urlencoded({ extended: false }), (req, res) => {
    const name =  req.body.lastName + '  ' + req.body.firstName;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const postalCode = req.body.postalCode;
    const prestation = req.body.prestation;
    const message = req.body.message;
    const mail = {
        from: `"${name}" <${process.env.EMAIL_ADRESS}>"`,
        to: process.env.EMAIL_ADRESS,
        subject: "Contact form submission",
        html: `<p>Name : ${name}</p>` +
            `<p>Email : ${email}</p>` +
            `<p>Phone : ${phone}</p>` +
            `<p>Address : ${address}</p>` +
            `<p>Postal : ${postalCode}</p>` +
            `<p>Prestation : ${prestation}</p>` +
            `<p>Message : ${message}</p>`
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message sent" });
        }
    });
});



app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html' ));
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})