
const client = require('./redis-database');
const rateLimit = require('express-rate-limit');

class Limiter {

  constructor(app) {
    //console.log(app);
    //this.limiter = require('express-limiter')(app, client);
  }

  // FOR IP only
  usingRemoteAddress() {        
    return rateLimit({
      windowMs: 60 * 60 * 1000, // 1 hour window
      max: 5, // start blocking after 5 requests
      message: "You are not welcome here, Rate limit exceeded",      
    });
  }

  asGetParameter() {
    return rateLimit({
      windowMs: 60 * 60 * 1000,
      max: 5,
      message: "You are not welcome here, Rate limit exceeded",
      keyGenerator: function(req, res) {        
        return req.params.id;
      }
    })
  }

  //For API KEY values
  checkApiKey() {
    return rateLimit({
      windowMs: 60 * 60 * 1000,      
      statusCode: 200,      
      onLimitReached: async (req, res, options) => {
        try {          
          const validKeyResult = await this.isValidApiKey(req.params.apiKey);
          
          options.headers = true;
          if (validKeyResult) {
            options.keyGenerator = (req) => req.params.apiKey;
            options.windowMs = 0;
            options.statusCode = 200;
            options.max = 10;                          
            options.message = "You are not welcome here, Rate limit exceeded";
          } else {                              
            options.message = "You are not welcome here, Rate limit exceeded";
            options.max = 5;
            options.statusCode = 429;
          }
                                            
        } catch (error) {          
          options.message = "You are not welcome here, Rate limit exceeded";
          options.max = 5;          
          options.statusCode = 429;
        }     
                     
        return options;
      },      
    });
  }

  isValidApiKey(apiKey) {
    /**
    * Here based on `apiKey` you should rreturn true or false.
    *`apiKey` can be compared with any api key stored in database.
    */
    return new Promise( (resolve, reject) => {
      1 ? resolve(true) : reject(false);
    });
  }
}

module.exports = Limiter;