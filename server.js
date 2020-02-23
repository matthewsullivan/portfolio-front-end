const cors = require('cors');
const express = require('express');

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const preview = require('./model/preview.json');
const studies = require('./model/studies.json');

const app = express();
const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.listen(port);

app.get('/api/v1/studies', (req, res) => {
  const studies = preview;

  if (!studies) {
    res.status(204);
  }

  res.json(studies);
});

app.get('/api/v1/study/:id', (req, res) => {
  const study = studies[req.params.id];

  if (!study) {
    res.status(204);
  }

  res.json(study);
});

app.post('/api/v1/send-email', (req, res) => {
  const data = req.body;

  if (!data.userEmail || !data.userMessage || !data.userName) {
    res.send('All fields required');

    return;
  }

  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: data.email,
    to: 'contact@matthewsullivan.media',
    subject: 'Email from www.matthewsullivan.media',
    html: `<p>${data.userName}</p>
           <p>${data.userEmail}</p>
           <p>${data.userMessage}</p>`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send('Something went wrong. Please try again.');

      return;
    }

    res.send(`Thanks, ${data.userName}. I will be in touch shortly.`);

    smtpTransport.close();
  });
});
