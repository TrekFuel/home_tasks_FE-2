import { CONFIG } from './config';

const previewTemplate = require('../templates/preview-template.handlebars');
const viewTemplate = require('../templates/view-template.handlebars');

// eslint-disable-next-line import/prefer-default-export
export class Render {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor() {

  }

  // eslint-disable-next-line class-methods-use-this
  generateAllNews(data) {
    const { allNewsPage } = CONFIG.elements;
    allNewsPage.innerHTML = previewTemplate(data);

    allNewsPage.querySelectorAll('.single-news-btn')
      .forEach((button) => {
        button.addEventListener('click', (event) => {
          event.preventDefault();
          const { index } = button.dataset;
          window.history.pushState(null, null, `/news/${index}`);
        });
      });
  }

  // eslint-disable-next-line class-methods-use-this
  renderMainPage() {
    const { mainPage } = CONFIG.elements;
    mainPage.classList.add(CONFIG.displayBlock);
  }
}
