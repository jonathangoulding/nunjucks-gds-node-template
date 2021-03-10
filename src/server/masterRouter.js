const landingRoute = require('../routes/landing/landing.router');

module.exports = (app) => {
  app.use('/', landingRoute);
};
