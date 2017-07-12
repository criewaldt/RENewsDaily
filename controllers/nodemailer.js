const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'advertapibot@gmail.com',
        pass: 'tulqshqdakaooszh'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Real Estate News" <advertapibot@gmail.com>', // sender address
    to: 'criewaldt@gmail.com', // list of receivers
    subject: 'Confirm subscription - RENews', // Subject line
    //text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});