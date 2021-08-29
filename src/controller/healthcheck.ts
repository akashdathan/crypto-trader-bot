import { Controller, Get } from 'routing-controllers';

@Controller()
export class HealthCheck {
  @Get('/healthCheck')
  healthCheck(): Date {
    return new Date();
  }
}
