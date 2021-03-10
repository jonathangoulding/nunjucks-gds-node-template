module.exports = {
  get: (req, res) => {
    const title = 'Hello Template';
    res.render('landing/index.njk', { title });
  },
};
