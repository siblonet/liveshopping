import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LiveGateway } from './live.gateway';


@Controller("live")
export class LiveController {
    constructor(private readonly doorGateway: LiveGateway) { }

    @Get()
    getConnectedSockets() {
        return this.doorGateway.getConnectedSockets();
    };

    @Get("messages/:id")
    getMessages(@Param('id') id: string) {
        return this.doorGateway.getMessages(id);
    };


    @Post("/:id")
    async SendOrder(@Param('id') id: any, @Body() order: any): Promise<void> {
        return this.doorGateway.SendOrder(order, id);
    }

}