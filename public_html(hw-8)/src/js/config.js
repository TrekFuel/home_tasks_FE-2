// eslint-disable-next-line import/prefer-default-export
export const CONFIG = {
  api: 'http://localhost:3006',
  elements: {
    mainPage: document.getElementById('mainPage'),
    filtersPage: document.getElementById('filtersPage'),
    allNewsPage: document.getElementById('allNewsPage'),
    singleNewsPage: document.getElementById('singleNewsPage'),
    singleNews: document.querySelectorAll('.single-news'),
    signInPage: document.getElementById('signInPage'),
    signUpPage: document.getElementById('signUpPage'),
    aboutPage: document.getElementById('aboutPage'),
    aboutButton: document.getElementById('aboutButton'),
    backButton: document.getElementById('backButton'),
    header: document.getElementsByTagName('header'),
    errorPage: document.getElementById('errorPage'),
    checkboxes: '#filtersPage input[type=checkbox]',
  },
  displayNone: 'd-none',
  displayBlock: 'd-block',
  filterOptions: ['newsCategory', 'newsDate', 'newsActivity', 'newsRating'],
};
