module.exports = function(req, res, next) {
  req.session.name = null;
  req.session.password = null;
  req.session.logined = false;
  res.redirect('/');
};
  
