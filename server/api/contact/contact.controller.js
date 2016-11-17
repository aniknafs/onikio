/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/contacts              ->  index
 */

'use strict';

var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var sgOptions = {
    auth: {
        api_user: 'niknafs',
        api_key: 'niki13621440!?'
    }
};

exports.send = function(req, res) {
    var sgTransporter = nodemailer.createTransport(
        sgTransport(sgOptions)
    );

    var mailOptions = {
        from: req.body.email,
        subject: "Feedback",
        to: 'niknafs@gmail.com',
        html: req.body.message + '<br> <br> Name: ' + req.body.name + '<br> Phone: ' + req.body.phone + '<br> Email: ' + req.body.email + '<br> <br> To reply to this message reply to the email.',
        replyto: req.body.email
            // text: 'Hello world ✔', // plaintext body
    };

    sgTransporter.sendMail(mailOptions,
        function(error, res) {
            if (error) {
                return console.log('Feedback Message error: ' + error);
            }
            console.log('Feedback Message sent: ' + JSON.stringify(res));
        });
    return res.json(200);
}


// Gets a list of Contacts
export function index(req, res) {
    res.json([]);
}
