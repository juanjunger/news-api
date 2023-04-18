import { Module } from '@nestjs/common';

import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { HealthCheckController } from './healthcheck/healthcheck.controller';

@Module({
  imports: [HealthcheckModule],
  controllers: [HealthCheckController],
  providers: [],
})
export class AppModule {}
