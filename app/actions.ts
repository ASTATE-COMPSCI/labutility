'use server'

import { mqttClient } from "./mqttClient";

export async function toggleMonitors() {
    const client = mqttClient();

    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error('MQTT connection timeout'));
        }, 5000);

        const doPublish = () => {
            client.publish('zigbee2mqtt/1/set', JSON.stringify({ state: "TOGGLE" }), (err) => {
                clearTimeout(timeout);
                if (err) {
                    console.error('Publish failed:', err);
                    reject(err);
                } else {
                    console.log('Published successfully');
                    resolve(true);
                }
            });
        };

        if (client.connected) {
            doPublish();
        } else {
            client.once('connect', doPublish);
            client.once('error', (err) => {
                clearTimeout(timeout);
                reject(err);
            });
        }
    });
}