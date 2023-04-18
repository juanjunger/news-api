import { Test, TestingModule } from '@nestjs/testing';

import { HealthCheckController } from './healthcheck.controller';

describe('HealthcheckController', () => {
  let healthCheckController: HealthCheckController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
    }).compile();

    healthCheckController = app.get<HealthCheckController>(
      HealthCheckController,
    );
  });

  describe('when get on /healthcheck', () => {
    it('should return "Online"', () => {
      expect(healthCheckController.getHealthCheck()).toBe('Online');
    });
  });
});
