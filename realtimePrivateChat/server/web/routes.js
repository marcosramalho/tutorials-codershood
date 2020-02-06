/*
* Real time private chatting app using Angular 2, Nodejs, mongodb and Socket.io
* @author Shashank Tiwari
*/

'use strict';

const routeHandler = require('./../handlers/route-handler');

class Routes{

	constructor(app){
		this.app = app;
	}

	/* creating app Routes starts */
	appRoutes(){
		this.app.post('/api/usernameAvailable', routeHandler.userNameCheckHandler);

		this.app.post('/api/register', routeHandler.registerRouteHandler);

		this.app.post('/api/login', routeHandler.loginRouteHandler);

		this.app.post('/api/userSessionCheck', routeHandler.userSessionCheckRouteHandler);

		this.app.post('/api/getMessages', routeHandler.getMessagesRouteHandler);

		//this.app.get('*', routeHandler.routeNotFoundHandler);		
	}

	routesConfig(){
		this.appRoutes();
	}
}
module.exports = Routes;