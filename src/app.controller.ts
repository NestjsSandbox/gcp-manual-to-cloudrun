import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('err')
  getErr(): string{
    try {
      throw new Error();
    } catch (e) {
      //this.logger.error('Calling getHello()', e.stack, AppController.name);
      console.log('Triggered an error response', e.stack)
    }
    return 'Hello from err route';
  }
}
