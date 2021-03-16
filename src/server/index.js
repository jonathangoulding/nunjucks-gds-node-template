const express = require('express');
const configureNunjucks = require('./configureNunjucks');
const configureStaticAssets = require('./configureStaticAssets');
const mainRouter = require('./mainRouter');

const app = express();

const port = 3000;

configureNunjucks(app);
configureStaticAssets(app);
mainRouter(app);

app.listen(port, () => {
  console.log(`Starting server on ${port}`);
});
