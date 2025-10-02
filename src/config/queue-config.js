const amqplib = require("amqplib");

let channel, connection;

async function connectQueue() {
    try {
         connection = await amqplib.connect({
            protocol: 'amqp',
            hostname: 'localhost',
            port: 5672,
            username: 'guest',
            password: 'guest',
            frameMax: 65536 //mac m1  64 KB frame max size

        });
        channel = await connection.createChannel();

        await channel.assertQueue("noti-queue");
    } catch (error) {
        console.log("the_cond", error);
    }
}

async function sendData(data) {
    try {
        await channel.sendToQueue("noti-queue", Buffer.from(JSON.stringify(data)));

    } catch (error) {
        console.log("queue error", error);
    }
}

module.exports = {
    connectQueue,
    sendData
}