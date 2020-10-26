const push = require('web-push');

//var keysId = push.generateVAPIDKeys();

const keysId = {
    publicKey: 'BOUY13VAiT16TFrpspI9K-8PYv7u53nTIhP6sM_ITow5_JzI96A1NZ63Eu3c65Xq-vk6LU5b15PpDLhW3B_A73c',
    privateKey: 'mIitwfSldQFhIPGaBgbQBvTWGjrXuMpCB0_Zv-XUEbo'
}

push.setVapidDetails("faleconosco@driveinfest.info", keysId.publicKey, keysId.privateKey)

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/dLiyRv4-H6I:APA91bFOGypT_RbAlrqHspKBCKin6S5qRI33R0aRQn4kpfor3INLKAMWsPfNevqQyVrF751LByg2SYcQgJPgUYcI_h7oKLW1Fl-VMTrxnVoxhgd4FTSTVOaquRrdUgro_98UvVO44mti",
    expirationTime:null,
    keys:{"p256dh":"BPCE8kM50X05E8iS8KoD8f4RmSCvgla6z2RheQpAcXpH-TbDGWHGkW7O1mrnX76knHU1lbaefyryv8X_Q1QEqIM",auth:"wTGYJqlbGUXykAUAdKSueA"}
};

push.sendNotification(sub, 'Test message')

console.log(keysId);