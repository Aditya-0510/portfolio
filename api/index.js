import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS          
    }
});

app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log("Received Data:", req.body);

    if (!email || !subject || !message) {
        return res.status(400).send('Missing required fields');
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,  
        to: "saiaditya6558@gmail.com",
        subject: subject,
        text: `From: ${name} (${email})\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error: ' + error.message);
        } else {
            console.log('Email sent:', info.response);
            return res.status(200).send('Email sent successfully' );
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
