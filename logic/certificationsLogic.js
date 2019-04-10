module.exports = {
  setIndex: function(res) {
    res.render('certifications', {personName: res.locals.name, footerTimestamp: res.locals.timestamp});
  }
}
