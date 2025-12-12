import mqtt from "mqtt";
import dotenv from "dotenv";

dotenv.config();
let client: mqtt.MqttClient | null = null;

export function mqttClient() {
    if (!process.env.MQTT_CONNECTION_STRING) throw new Error("MQTT Connection not defined.");
    if (!client) {
        client = mqtt.connect(process.env.MQTT_CONNECTION_STRING);
    }
    return client;
}