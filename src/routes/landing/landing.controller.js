module.exports = {
  get: (req, res) => {
    const title = 'Hello Template';
    res.render('index.njk', { title });
  },
};
