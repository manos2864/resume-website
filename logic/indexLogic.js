module.exports = {
  setIndex: function(res) {
    res.render('index', {personName: res.locals.name, footerTimestamp: res.locals.timestamp});
  }
}
