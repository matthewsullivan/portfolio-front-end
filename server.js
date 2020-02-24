const cors = require('cors');
const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const preview = require('./model/preview.json');
const studies = require('./model/studies.json');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

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

if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging'
) {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
}

app.listen(port);
