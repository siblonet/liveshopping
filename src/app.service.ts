import { Injectable } from '@nestjs/common';
//construction 
@Injectable()
export class AppService {
  getHello(): object {
    const fory = {
      "nome":"Live",
      "lastname":"RTC",
    }
    return fory;
  }
}
