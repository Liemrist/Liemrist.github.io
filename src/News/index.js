import '@babel/polyfill';
import 'whatwg-fetch';

import './styles.css';

import News from './News';


(function main() {
  const BBS_NEWS_URL = 'https://newsapi.org/v2/top-headlines?'
    + 'sources=bbc-news&'
    + 'apiKey=28566835fa6d4cc3b2b9c2300d986e3b';

  const newsElement = document.getElementById("news");
  const news = new News(newsElement, BBS_NEWS_URL);
  
  news.renderNews();
})();
