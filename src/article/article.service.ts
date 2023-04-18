import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  async getArticles(query: string, date: string) {
    const response = await this.getNewsByApi(query, date);
    return response;
  }

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
    const url = `${process.env.NEWS_API_URL}?q=${query}&from=${date}&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`;

    const response = await fetch(url);
    const news = await response.json();
    return news;
  }
}
