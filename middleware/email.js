//send email to confirm subscription
const nodemailer = require('nodemailer');

try {
    var config = require('../local/config.js');
} catch (err) {
    console.log(err);
    var config = {gmail:{username:"", password: ""}};
}

function confirmEmail(email) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: config.gmail.username || process.env.GMAILUSER,
            pass: config.gmail.password || process.env.GMAILPW
        }
    });
    
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"R.E. News Daily" <RENewsDaily@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Confirm your subscription to R.E. News Daily', // Subject line
        text: 'Hello, if you are seeing this, your email does not allow HTML and R.E. News Daily cannot send you articles. Sorry! :(', // plain text body
        html: '<p>Hello,</p><p>Confirm your subscription to R.E. News Daily by clicking this link: <a href="{}">Subscribe</a></p>\n\n<p>R.E. News Daily</p>'.replace("{}", "http://localhost:3000/subscribe/{}".replace("{}", email)) // html body
    };
    
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}


module.exports = confirmEmail;