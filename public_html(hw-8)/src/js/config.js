// eslint-disable-next-line import/prefer-default-export
export const CONFIG = {
  api: 'http://localhost:3006',
  elements: {
    mainPage: document.getElementById('mainPage'),
    filtersPage: document.getElementById('filtersPage'),
    allNewsPage: document.getElementById('allNewsPage'),
    singleNewsPage: document.getElementById('singleNewsPage'),
    singleNews: document.querySelectorAll('.single-news'),
    singleNewsButton: document.querySelector('.single-news-btn'),
    signInPage: document.getElementById('signInPage'),
    signUpPage: document.getElementById('signUpPage'),
    aboutPage: document.getElementById('aboutPage'),
    errorPage: document.getElementById('errorPage'),
    checkboxes: '#filtersPage input[type=checkbox]',
  },
  displayNone: 'd-none',
  displayBlock: 'd-block',
  filterOptions: ['newsCategory', 'newsDate', 'newsActivity', 'newsRating'],
};
