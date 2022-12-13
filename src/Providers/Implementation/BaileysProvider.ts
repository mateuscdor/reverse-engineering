import makeWASocket from "@adiwajshing/baileys";
import { v4 as uuid_v4 } from "uuid";

type SocketConfigType = {
    auth: {
        creds: any;
        keys: any;
    };
    key: string;
    chats: any[];
    qr: string;
    messages: any[];
    qrRetry: number;
    customWebhook: string;
}

type InstanceType = {
    key: string;
    chats: never[];
    qr: string;
    messages: never[];
    qrRetry: number;
    customWebhook: string;
}

class WhatsAppInstance {
    private SocketConfig: SocketConfigType;
    
    public key: string;
    public authState: any;
    public allowWebhook: boolean;
    public webhook: string;

    private instance: InstanceType;

    constructor(props: Omit<WhatsAppInstance, 'key'>, key?: string) {
        Object.assign(this, props);
        if (!key) {
            this.key = uuid_v4();
        }
    }

    async init() {
        makeWASocket(this.SocketConfig)
    }
}