"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var News =
/*#__PURE__*/
function () {
  function News(parent, newsUrl) {
    _classCallCheck(this, News);

    this.parent = parent;
    this.newsUrl = newsUrl;
    this.renderArticle = this.renderArticle.bind(this);
  }

  _createClass(News, [{
    key: "fetchNews",
    value: function () {
      var _fetchNews = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var news;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(this.newsUrl);

              case 2:
                news = _context.sent;
                return _context.abrupt("return", news.json());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchNews() {
        return _fetchNews.apply(this, arguments);
      }

      return fetchNews;
    }()
  }, {
    key: "renderNews",
    value: function () {
      var _renderNews = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _ref, articles;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.fetchNews();

              case 3:
                _ref = _context2.sent;
                articles = _ref.articles;
                articles.forEach(this.renderArticle);
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", this.parent.innerHTML += "<article>".concat(_context2.t0.message, "</article>"));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function renderNews() {
        return _renderNews.apply(this, arguments);
      }

      return renderNews;
    }()
  }, {
    key: "renderArticle",
    value: function renderArticle(article) {
      return this.parent.innerHTML += '<article>' + "<h1>".concat(article.title, "</h1>") + "<p>".concat(article.content, "</p>") + "<img src=\"".concat(article.urlToImage, "\" />") + "<br><a href=\"".concat(article.url, "\">Read more...</a>") + '</article>';
    }
  }]);

  return News;
}();

(function main() {
  var BBS_NEWS_URL = 'https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=28566835fa6d4cc3b2b9c2300d986e3b';
  var newsElement = document.getElementById("news");
  var news = new News(newsElement, BBS_NEWS_URL);
  news.renderNews();
})();
