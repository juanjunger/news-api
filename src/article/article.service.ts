import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  async getArticles(query: string, date: string) {
    const { articles } = await this.getNewsByApi(query, date);

    const data = this.getTreatedData(articles);
    return data;
  }

  // TO-DO: Treat error
  async getNewsByApi(query: string, date: string) {
    const newsByApi = await this.fetchNewsJSON(query, date)
      .then((news) => {
        return news;
      })
      .catch((error) => {
        throw new Error(error);
      });

    return newsByApi;
  }

  async fetchNewsJSON(query: string, date: string) {
    const url = `${process.env.NEWS_API_URL}?q=${query}&from=${date}&apiKey=${process.env.NEWS_API_KEY}`;

    const response = await fetch(url);
    const news = await response.json();
    return news;
  }

  // TO-DO: Create DTO
  getTreatedData(articles: any[]) {
    const data = articles.map((article) => {
      return {
        author: article.author,
        title: article.title,
        description: article.description,
      };
    });

    return data;
  }
}
