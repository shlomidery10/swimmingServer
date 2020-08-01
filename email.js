const mail = require('./utils/mail');
let htmlContent = `
                <h1><strong>Contact Form</strong></h1>
                <p>Hi,</p>
                <p>asd contacted with the following Details</p>
                <br/>
                <p>Email: asdasda</p>
                <p>Phone: sadsad</p>
                <p>Company Name:sadsadsad</p>
                <p>Message:asdsadssd</p>
                `
    let mailOptions = {
        from: "workoutwithme.studiofit@gmail.com",
        to: "shlomidery10@gmail.com",
        subject: "Mail Test",
        text: "",
        html: htmlContent
    }

mail.sendMail(mailOptions)
    .then(function (email) {
        console.log("yes");
        // res.status(200).json({ success: true, msg: 'Mail sent' });
    }).catch(function (exception) {
        console.log("no");
        // res.status(200).json({ success: false, msg: exception });
    });