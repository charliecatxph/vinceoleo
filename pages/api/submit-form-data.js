require("dotenv").config();

const nodemailer = require("nodemailer");

const sendMail = async (data) => {
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `\"${data.name}\" \<${data.email}\>"`,
    to: process.env.TO_EMAIL,
    subject: process.env.SUBJECT,
    html: data.message,
  });

  return {
    code: 200,
    status: "OK",
    previewUrl: nodemailer.getTestMessageUrl(info),
  };
};

export default async function handler(req, res) {
  await sendMail(req.body)
    .then((d) => {
      res.status(d.code).json({ status: d.status });
    })
    .catch((e) => {
      res.status(504).json({ status: e.code });
    });
}
