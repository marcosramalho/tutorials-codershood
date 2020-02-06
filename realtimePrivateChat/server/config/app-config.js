/*
* Real time private chatting app using Angular 2, Nodejs, mongodb and Socket.io
* @author Shashank Tiwari
*/

const expressConfig = require('./express-config');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

class AppConfig{
	
	constructor(app){
		dotenv.config();
		this.app = app;
	}

	includeConfig() {
		this.app.use(bodyParser.json());
		this.app.use(cors());       				
		this.app.use(express.static(path.join(__dirname, '../public/')));  
		new expressConfig(this.app);
	}

}
module.exports = AppConfig;
