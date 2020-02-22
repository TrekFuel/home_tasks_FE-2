import { CONFIG } from './config';

const previewTemplate = require('../templates/preview-template.handlebars');
const viewTemplate = require('../templates/view-template.handlebars');

// eslint-disable-next-line import/prefer-default-export
export class Render {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor(router) {
    this.router = router;
  }

  // eslint-disable-next-line class-methods-use-this
  generateAllNews(data) {
    const { allNewsPage } = CONFIG.elements;
    allNewsPage.innerHTML = previewTemplate(data);
    const singleNewsButton = document.querySelectorAll('.single-news-btn');

    singleNewsButton.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const { index } = button.dataset;
        window.history.pushState(null, null, `/news/${index}`);
        console.log(window.location.pathname);
        this.router.render(decodeURI(window.location.pathname));
      });
    });
  }


  // eslint-disable-next-line class-methods-use-this
  renderMainPage(newsElems) {
    const { mainPage } = CONFIG.elements;
    const allNews = CONFIG.elements.singleNews;

    [...allNews].forEach((news) => {
      news.classList.add(CONFIG.displayNone);
    });

    [...allNews].forEach((news) => {
      newsElems.forEach((item) => {
        if (Number(news.dataset.index) === Number(item.id)) {
          news.classList.remove(CONFIG.displayNone);
        }
      });
    });

    mainPage.classList.add(CONFIG.displayBlock);
  }

  initSingleNewsPage() {
    this.singleNewsPage = CONFIG.elements.singleNewsPage;
    this.singleNewsPage.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.singleNewsPage.classList.contains(CONFIG.displayBlock)) {
        const clicked = event.target;

        if (clicked.classList.contains('back')) {
          window.history.back();
          this.router.render(decodeURI(window.location.pathname));
        }
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  renderSingleNewsPage(newsElems) {
    const { singleNewsPage } = CONFIG.elements;
    const index = window.location.pathname.split('/news/')[1].trim();
    let isFind = false;

    if (newsElems.length) {
      newsElems.forEach((news) => {
        if (Number(news.id) === Number(index)) {
          isFind = true;
          singleNewsPage.innerHTML = viewTemplate;
        }
      });
    }

    // eslint-disable-next-line no-unused-expressions
    isFind ? singleNewsPage.classList.add(CONFIG.displayBlock) : console.log('404 not found');
  }
}
