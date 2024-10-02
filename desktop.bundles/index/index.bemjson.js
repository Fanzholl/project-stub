const nav = require('../../desktop.blocks/nav/nav.bemjson.js');
const header = require('../../desktop.blocks/header/header.bemjson.js');
const main = require('../../desktop.blocks/main/main.bemjson.js');
const footer = require('../../desktop.blocks/footer/footer.bemjson.js');

module.exports = {
  block: 'page',
  title: 'My First BEM Page',
  head: [
    { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
    { elem: 'css', url: 'index.css' },
  ],
  content: [
    nav,
    header,
    main,
    footer,
  ]
};
