// eslint-disable-next-line import/prefer-default-export
export const CONFIG = {
  api: 'http://localhost:3006/',
  elements: {
    mainPage: document.getElementById('mainPage'),
    filtersPage: document.getElementById('filtersPage'),
    allProductsPage: document.getElementById('allProductsPage'),
    singleProductPage: document.getElementById('singleProductPage'),
    singleProduct: document.querySelector('.single-product'),
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
