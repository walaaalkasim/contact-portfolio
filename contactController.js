const nodemailer = require("nodemailer");

exports.contact = async (req, res) => {
  const { email, msg } = req.body;
  console.log("req.body", req.body);

  try {
    let transporter = nodemailer.createTransport({
      /*  host: "smtp.ethereal.email",
              port: 587,
              secure: false, // true for 465, false for other ports
              auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
              }, */
      service: "Gmail",
      auth: {
        user: "walaadci@gmail.com",
        pass: process.env.GMAIL,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Web United" <info@webunited.com>', // sender address
      to: "walaa.alkasim@hotmail.com, " + req.body.email, // list of receivers
      //subject: "Contact Request by " + req.body.fullName, // Subject line
      text: req.body.msg, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return res.json({ msg: "email sent" });
  } catch (error) {
    console.log("the error is", error);
    return res.json({ msg: "email not sent" });
  }
};
