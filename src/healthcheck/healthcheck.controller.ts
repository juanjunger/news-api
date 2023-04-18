import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthCheckController {
  @Get('/healthcheck')
  getHealthCheck(): string {
    return 'Online';
  }
}
