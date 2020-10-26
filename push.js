const push = require('web-push');

//var keysId = push.generateVAPIDKeys();

const keysId = {
    publicKey: 'BOUY13VAiT16TFrpspI9K-8PYv7u53nTIhP6sM_ITow5_JzI96A1NZ63Eu3c65Xq-vk6LU5b15PpDLhW3B_A73c',
    privateKey: 'mIitwfSldQFhIPGaBgbQBvTWGjrXuMpCB0_Zv-XUEbo'
}

push.setVapidDetails('acambinza@gmail.com', keysId.publicKey, keysId.privateKey)

let sub = {
    
}

push.sendNotification(sub, 'Test message')

console.log(keysId);