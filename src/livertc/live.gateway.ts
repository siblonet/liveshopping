import { Injectable } from '@nestjs/common';
import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    MessageBody
} from '@nestjs/websockets';
import { Server } from 'socket.io';



@Injectable()
@WebSocketGateway({
    transports: ['websocket', 'polling'],
    cors: {
        origin: '*:*',
        methods: ['GET', 'POST'],
    }
})

export class LiveGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;


    constructor() { }
    ids = [];

    getConnectedSockets() {
        return this.ids
    }

    async handleConnection(client: any) {
        const doo = { connecteds: client.id }
        this.ids.push(doo)

    }

    @SubscribeMessage('send_hoim')
    async identity(@MessageBody() data: any) {
        if (data.author == "admin") {
            this.server.emit(data.to, data.message);

        } else {
            this.server.emit("admin", data.message);
            this.server.emit(data.to, data.message);

        }
    }


    async handleDisconnect(client: any) {
        const prevIndex = this.ids.findIndex(item => item.connecteds === client.id);
        this.ids.splice(prevIndex, 1);
    }

    async onGba_Gba(to_and: any, notifi_to: any) {
        /*
        const dato = {
            "to": notifi_to,
            "sound": "default",
            "title": "Privée",
            "body": "Demande de livraison",
        }
        axios.post("https://exp.host/--/api/v2/push/send", dato).then(() => {
        }).catch(err => {
            // Handle Error Here
            console.error(err);
        });*/
        this.server.emit(to_and);
    }




}
