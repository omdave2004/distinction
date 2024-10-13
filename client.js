const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

const minTemp = 10;
const maxTemp = 25;

function publishTemperature() {
    const temperature = Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;
    const message = JSON.stringify({
        temperature: temperature,
        time: new Date().toISOString()
    });

    client.publish('/smartroom/heater100', message, () => {
        console.log('Temperature sent:', message);
    });
}

client.on('connect', () => {
    console.log('Connected to MQTT broker');
    setInterval(publishTemperature, 5000); // Publish temperature every 5 seconds
});
