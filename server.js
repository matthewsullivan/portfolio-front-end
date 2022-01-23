const axios = require('axios');
const cors = require('cors');
const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const preview = require('./model/preview.json');
const studies = require('./model/studies.json');

const app = express();
const port = process.env.PORT || 8080;

const validateRecaptcha = async (req, token) => {
  if (!token) return false;

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}&remoteip=${req.connection.remoteAddress}`;

  try {
    const response = await axios.get(url);
    const score = JSON.parse(response.data.score);

    return score > 0.5;
  } catch (err) {
    return false;
  }
};

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

app.post('/api/v1/send-email', async (req, res) => {
  const data = req.body;
  const message = 'Please email contact@matthewsullivan.media directly.';

  if (!data.userEmail || !data.userMessage || !data.userName) {
    res.status(400).send('All fields are required.');

    return;
  }

  const validUser = validateRecaptcha(req, data.token);

  if (!validUser) {
    res.status(418).send(message);

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

  smtpTransport.sendMail(mailOptions, (err) => {
    if (err) {
      res.status(400).send(message);

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

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/build/index.html`));
  });
}

app.listen(port, () => {
  console.log(`Server Port: ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
