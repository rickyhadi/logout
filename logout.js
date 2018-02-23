function logout(){
	var appConfig = require('appconfig');
	var renderer = require('renderer')();
	var helper = require('helper')();
	var express = require('express');
	var router = express.Router();

	router.get('/', function(req, res, next) {
	  try{
		var keysession = appConfig.App.Cookie.Key_Session;
		var session = helper.getSession(req);
		res.clearCookie(keysession);
		helper.delRedis(session);
	  }
	  catch(ex){
		console.log(ex);
	  }
	  res.send('00|Success');
	});
	
	return router;
}
module.exports = logout;
