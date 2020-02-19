import json from '../db.json';
import '../styles/style.scss';
import { CONFIG } from './config';
import { Render } from './render';

class App {
  constructor() {
    this.news = [];
    this.render = new Render();
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
      })
      .then(() => {
        this.render.renderMainPage();
      });
  }
}

const app = new App();
