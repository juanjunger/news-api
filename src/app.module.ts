import { Module } from '@nestjs/common';

import { HealthCheckController } from './healthcheck/healthcheck.controller';

import { ArticleModule } from './article/article.module';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';

@Module({
  imports: [ArticleModule],
  controllers: [HealthCheckController, ArticleController],
  providers: [ArticleService],
})
export class AppModule {}
