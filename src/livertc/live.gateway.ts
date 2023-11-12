import { Injectable } from '@nestjs/common';
import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    MessageBody,
    ConnectedSocket,
} from '@nestjs/websockets';
import axios from 'axios';
import { Server } from 'socket.io';
import { Chats } from './chats.entity';




@Injectable()
@WebSocketGateway({
    transports: ['websocket', 'polling'],
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    }
})

export class LiveGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    ids = [];
    clientTo: Chats[];

    getConnectedSockets() {
        return [...this.ids, ...this.clientTo]
    };

    getMessages(id: String) {
        const client = this.clientTo.filter(item => item.owner == id);

        return client;
    };

    async handleConnection(client: any) {
        /*const doo = { connecteds: client.id, author: "" };
        this.ids.push(doo)
        this.server.emit("nouVeau", client.id);*/
        //console.log(client.id);
    };


    //"Eye_cLPcTFAxJBvkAAAE eifhie"

    async SendOrder(order: any, owner: any) {

        this.server.emit(owner, order);
    };



    @SubscribeMessage('dasboard')
    async identity(@MessageBody() data: any, @ConnectedSocket() client: any) {
        const adminIS = this.ids.find(item => item.author == "admin");
        if (!adminIS && data.author == "admina") {
            const doo = { connecteds: data.id, author: "admina" };
            this.ids.push(doo);
            this.server.emit("isDamin", "enline");

        } else if (data.author == "admina") {
            const doo = { connecteds: data.id, author: "admina" };
            this.ids.push(doo);
        }


        if (this.ids.length > 4) {
            this.server.emit("disconnecto", "discon");
            client.disconnect();
            const prevIndex = this.ids.findIndex(item => item.connecteds == client.id);
            this.ids.splice(prevIndex, 1);

            /*;
            this.server.disconnectSockets();
            this.clientTo = [];
            this.ids = [];
            */

            return this.clientTo;
        } else {
            return this.clientTo;
        }
    };


    @SubscribeMessage('disconnector')
    async diconnector(@MessageBody() data: any, @ConnectedSocket() client: any) {
       // console.log("diconnected", data, client.id);

        //cleint.disconnect();
        this.server.disconnectSockets();
        const prevIndex = this.ids.findIndex(item => item.connecteds == client.id);
        this.ids.splice(prevIndex, 1);
        /*this.clientTo = [];
        this.ids = [];*/

    };


    @SubscribeMessage('send_toclient')
    async adminMessages(@MessageBody() data: any) {
        const clienexi = this.clientTo.find(item => item.to == data.to);
        if (clienexi) {
            if (!clienexi.admin) {
                clienexi.admin = data.me
            } else if(clienexi.admin == data.me) {
                this.server.emit(data.to, data);

            }
        } else {
            this.server.emit(data.to, data);
        }
    };



    @SubscribeMessage('send_toadmin')
    async clientMessages(@MessageBody() data: any) {
        if (this.ids.length > 0) {
            this.server.emit("admina", data);
            const clienexi = this.clientTo.find(item => item.to == data.to);
            if (clienexi) {
                clienexi.body.push({
                    id: data.body[0].id,
                    chat: data.body[0].chat,
                });
            } else {
                this.clientTo.push(data)
            }
            return true

        } else {
            const dato = {
                "sound": "default",
                "title": data.name ? data.name : "Demande d'aide",
                "body": data.body[0].chat,
                data: data
            };

            const urlo = "http://localhost:3001/people/sendexpopushtoken";
            const urpu = "https://zany-plum-bear.cyclic.cloud/people/sendexpopushtoken";

            try {
                axios.post(urpu, dato).then().catch(err => {
                    console.error(err);
                });
            } catch (error) {
                null
            }

            return false
        }

    };

    async handleDisconnect(client: any) {
        const prevIndex = this.ids.findIndex(item => item.connecteds == client.id);
        this.ids.splice(prevIndex, 1);
        if (this.ids.length < 1) {
            this.server.emit("isDamin", "horline");
        }
    }

}
