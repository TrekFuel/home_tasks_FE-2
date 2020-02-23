import { CONFIG } from './config';

// eslint-disable-next-line import/prefer-default-export
export class Router {
  constructor() {
    this.routes = {
      404: () => {
        console.log('404 not found');
      },
    };

    this.mainPage = document.querySelectorAll('#mainPage');

    window.addEventListener('popstate', (event) => {
      event.preventDefault();
      this.render(decodeURI(window.location.pathname));
    });
  }

  addRoute(route, action) {
    this.routes[route] = action;
  }

  render(url) {
    const temp = url.split('/')[1];

    [...this.mainPage].forEach((page) => {
      page.classList.remove(CONFIG.displayBlock);
    });

    // eslint-disable-next-line no-unused-expressions
    this.routes[temp] ? this.routes[temp]() : this.routes['404']();
  }
}
