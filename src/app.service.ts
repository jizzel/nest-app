import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHome(): string {
    return 'You are home!';
  }

  getAbout(): string {
    return 'This is the about page!';
  }
}
