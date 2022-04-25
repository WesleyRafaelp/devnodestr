const config = require('../config')
const sendgrid = require('@sendgrid/mail')//(config.sendgridKey)
sendgrid.setApiKey(config.sendgridKey)
exports.send = async (to, subject, body) =>{
    sendgrid.send({
        to: to,
        from: 'wesleyrafael_p@protonmail.com',
        subject: subject,
        html: body
    });
};