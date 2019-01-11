const functions         = require('firebase-functions');
const admin             = require('firebase-admin');
const sgMail            = require('@sendgrid/mail');
admin.initializeApp();

// firebase functions:config:set sendgrid.key=SG.YOUR_API_KEY
const SENDGRID_API_KEY  = functions.config().sendgrid.key;
sgMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail = functions.firestore
    .document('contacts/{contactId}')
    .onCreate((snap, context) => {
      const newValue  = snap.data();
      const name      = newValue.name;
      const email     = newValue.email;
      const phone     = newValue.phone;
      const message   = newValue.message;

      const msg = {
        to: '90lucasgabriel@gmail.com',
        from: '90lucasgabriel@gmail.com',
        subject:  'Portfolio - Contato',
        text: message,

        // custom templates
        templateId: 'd-43e63b48cd86496ebe2a4bc02bdb2cd8',
        dynamic_template_data: {
          name:     name,
          email:    email,
          phone:    phone,
          message:  message
        }
      };

      return sgMail.send(msg);
});