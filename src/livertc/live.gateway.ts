import { Injectable } from '@nestjs/common';
import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    MessageBody
} from '@nestjs/websockets';
import axios from 'axios';
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

    ids = [];

    getConnectedSockets() {
        return this.ids
    }


    async handleConnection(client: any) {
        const doo = { connecteds: client.id, author: "" }
        this.ids.push(doo)
        this.server.emit("admina", client.id);
    }


    @SubscribeMessage('dasboard')
    async identity(@MessageBody() data: any) {
        if (data.author == "admina") {
            this.ids.find(item => item.connecteds === data.id).author = "admin";
        }

    }

    @SubscribeMessage('send_hoim')
    async messages(@MessageBody() data: any) {
        if (data.author == "admina") {
            this.server.emit(data.to, data.message);

        } else {
            const prevIndex = this.ids.find(item => item.author === "admin");
            if (prevIndex) {
                this.server.emit("admina", data);

            } else {
                const dato = {
                    "sound": "default",
                    "title": data.to,
                    "body": data.message,
                }
                axios.post("https://zany-plum-bear.cyclic.cloud/people/sendexpopushtoken", dato).then().catch(err => {
                    console.error(err);
                });
            }

        }
    }

    async handleDisconnect(client: any) {
        const prevIndex = this.ids.findIndex(item => item.connecteds === client.id);
        this.ids.splice(prevIndex, 1);
    }

}
