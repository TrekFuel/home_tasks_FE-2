import json from '../db.json';
import '../styles/style.scss';
import { CONFIG } from './config';
import { Render } from './render';

const previewTemplate = require('../templates/preview-template.handlebars');
const viewTemplate = require('../templates/view-template.handlebars');

class App {
  constructor() {
    this.products = [];
  }
}
