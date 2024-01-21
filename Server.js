const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "javiercomasbusiness@gmail.com",
    pass: "yubb quka luxg chqu"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("", (req, res) => {

  const name = req.body.firstName + req.body.lastName;
  const mail = req.body.mail;
  const message = req.body.message;
  const email = {
    from: name,
    to: "javiercomasbusiness@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${mail}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(email, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
