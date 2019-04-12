module.exports = {
  setIndex: function(res) {
    res.render('portfolio', {
      personName: res.locals.name,
      footerTimestamp: res.locals.timestamp,
      homeURL: res.locals.homeURL,
      certificationsURL: res.locals.certificationsURL,
      portfolioURL: res.locals.portfolioURL
    });
  }
}
