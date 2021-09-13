const nodemailer = require("nodemailer");
const report = require("./temp/allure-report/widgets/summary.json");


//console.log(report.statistic.total);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nazarko333@gmail.com',
        pass: 'ynylmhugynmbxufi' // we can use app.passwords from gmail
    }
})

let mailOptions = {
    from: "resident2222@gmail.com",
    to: "nazarko333@gmail.com",
    subject: "Autotest results",
    //text: "Message",
    html: `<div style="font-weight: bold">Total: ${report.statistic.total} </div>
          <div style="color:green">Passed: ${report.statistic.passed}</div>
          <div style="color:red">Failed: ${report.statistic.total - report.statistic.passed}</div>`

};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});