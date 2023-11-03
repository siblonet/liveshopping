import { Controller, Get } from '@nestjs/common';
import { LiveGateway } from './live.gateway';


@Controller("live")
export class LiveController {
    constructor(private readonly doorGateway: LiveGateway) { }

    @Get()
    getConnectedSockets(){
        return this.doorGateway.getConnectedSockets();
    }
}