const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/**', { target: 'http://api:8081/' }));
};
