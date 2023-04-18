import { Controller, Get, Param } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller()
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('articles/:query/:date')
  getArticles(@Param('query') query: string, @Param('date') date: string) {
    return this.articleService.getArticles(query, date);
  }
}
