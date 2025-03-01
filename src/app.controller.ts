import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/home')
  getHome(): string {
    return this.appService.getHome();
  }

  @Get('/about')
  getAbout(): string {
    return this.appService.getAbout();
  }
}
