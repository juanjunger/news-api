import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HealthCheckController } from './healthcheck/healthcheck.controller';

import { ArticleModule } from './article/article.module';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ArticleModule,
  ],
  controllers: [HealthCheckController, ArticleController],
  providers: [ArticleService],
})
export class AppModule {}
