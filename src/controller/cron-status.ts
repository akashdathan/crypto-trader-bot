import { Controller, Get } from 'routing-controllers';

@Controller()
export class Cron {
  static isEnabled = true;

  @Get('/enableCron')
  enableCron(): void {
    Cron.isEnabled = true;
    console.log(`Cron Status. isEnabled: ${Cron.isEnabled}`);
  }

  @Get('/disableCron')
  disableCron(): void {
    Cron.isEnabled = false;
    console.log(`Cron Status. isEnabled: ${Cron.isEnabled}`);
  }
}
