class News {
  constructor(parent, newsUrl) {
    this.parent = parent;
    this.newsUrl = newsUrl;
    this.renderArticle = this.renderArticle.bind(this);
  }

  async fetchNews() {
    const news = await fetch(this.newsUrl);
    return news.json();
  }

  async renderNews() {
    try {
      const { articles } = await this.fetchNews();
      articles.forEach(this.renderArticle);
    } catch(error) {
      return this.parent.innerHTML += `<article>${error.message}</article>`;
    }
  }

  renderArticle(article) {
    return this.parent.innerHTML += '<article>'  
      + `<h1>${article.title}</h1>`
      + `<p>${article.content}</p>`
      + `<img src="${article.urlToImage}" />`
      + `<br><a href="${article.url}">Read more...</a>`
      + '</article>';
  }
}

(function main() {
  const BBS_NEWS_URL = 'https://newsapi.org/v2/top-headlines?'
    + 'sources=bbc-news&'
    + 'apiKey=28566835fa6d4cc3b2b9c2300d986e3b';

  const newsElement = document.getElementById("news");
  const news = new News(newsElement, BBS_NEWS_URL);
  
  news.renderNews();
})();
