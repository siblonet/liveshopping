import { Controller, Get, Post, Body } from '@nestjs/common';
import { LiveGateway } from './live.gateway';


@Controller("live")
export class LiveController {
    constructor(private readonly doorGateway: LiveGateway) { }

    @Get()
    getConnectedSockets() {
        return this.doorGateway.getConnectedSockets();
    };

    @Get("messages")
    getMessages() {
        return this.doorGateway.getMessages();
    };


    @Post()
    async SendOrder(@Body() order: any): Promise<void> {
        return this.doorGateway.SendOrder(order);
    }

}