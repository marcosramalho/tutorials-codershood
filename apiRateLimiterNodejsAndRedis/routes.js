
"use strict";

const RateLimiter = require('./config');

class Routes {

  constructor(app) {    
    this.rateLimiter = new RateLimiter(app);
    this.app = app;
  }

  appRoutes() {
    /*
     * rate limiter for /users route only based in IP address
     */    
    this.app.get('/users', this.rateLimiter.usingRemoteAddress(),  (request, response) => {      
      response.status(200).json('You are welcome here');
    }); 

    this.app.get('/users-details/:id', this.rateLimiter.asGetParameter(), (request, response) => {
      response.status(200).json('You are welcome here');
    });

    this.app.get('/details/:apiKey', this.rateLimiter.checkApiKey(), (request, response) => {
      response.status(200).json('You are welcome here');
    });
      
  }

  routesConfig() {
    this.appRoutes();
  }
}

module.exports = Routes;