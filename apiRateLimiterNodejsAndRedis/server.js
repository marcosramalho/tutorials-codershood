'use strict'

const express = require("express");
const http = require('http');
const bodyParser = require('body-parser');

const routes = require('./routes');

class Server {

  constructor() {
    this.app = express();
    this.http = http.Server(this.app);
  }

  appConfig() {
    this.app.use(bodyParser.json());
  }

  /* Including app Routes starts */
  includeRoutes() {
    new routes(this.app).routesConfig();
  }

  // including app routes ends */
  appExecute() {
    this.appConfig();
    this.includeRoutes();

    const port =  process.env.PORT || 4000;
    const host = process.env.HOST || `localhost`;   
    
    this.http.listen(port, host, () => {
      console.log(`Listening on http://${host}:${port}`);
    });
  }
}
    
const app = new Server();
app.appExecute();