const express = require('express');
const configureNunjucks = require('./configureNunjucks');
const configureStaticAssets = require('./configureStaticAssets');
const masterRouter = require('./masterRouter');

const app = express();

const port = 3000;

configureNunjucks(app);
configureStaticAssets(app);
masterRouter(app);

app.listen(port, () => {
  console.log(`Starting server on ${port}`);
});
