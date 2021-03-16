const landingRoute = require('../features/landing/landing.router');

module.exports = (app) => {
  app.use('/', landingRoute);
};
