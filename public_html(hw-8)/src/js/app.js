import json from '../db.json';
import '../styles/style.scss';

import { CONFIG } from './config';
import { Render } from './render';
import { Router } from './router';

class App {
  constructor() {
    this.news = [];
    this.render = new Render(this.router);
    this.router = new Router();
    this.init();
  }

  init() {
    fetch(`${CONFIG.api}/news`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.news = data;
        this.render.generateAllNews(data);
        this.render.initSingleNewsPage();
        this.initRouter();
        this.router.render(decodeURI(window.location.pathname));
      });
  }

  initRouter() {
    this.router.addRoute('', this.render.renderMainPage.bind(this.render, this.news));
    this.router.addRoute('news', this.render.renderSingleNewsPage.bind(this.render, this.news));
  }
}

const app = new App();
