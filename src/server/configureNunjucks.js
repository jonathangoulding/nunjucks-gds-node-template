const nunjucks = require('nunjucks');
const path = require('path');

module.exports = (app) => {
  nunjucks.configure(
    [
      path.join(`${__dirname}/../views`),
      path.join(`${__dirname}/../../node_modules/govuk-frontend/`),
    ], {
      autoescape: true,
      express: app,
    },
  );
};
