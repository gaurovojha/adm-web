//express js config'use strict';

var express = require('express'),
    multipleViews = require('express-multiple-views'),
    path = require('path');
var compression = require('compression');
var RedisStore = require('connect-redis')(express);

var Utils=require("../common/Utils/Utils.js");
var serverConfig=Utils.getServerConfig();
var redisClient=Utils.getRedisClient();
module.exports = function(app) {
  var rootPath = path.normalize(__dirname + '/../..');
  serverConfig.env=serverConfig.env?serverConfig.env:'development';
  if(serverConfig.env=='development'){

      // Disable caching of scripts for easier testing
      app.use(function noCache(req, res, next) {
          if (req.url.indexOf('/scripts/') === 0) {
              res.header("Cache-Control", "no-cache, no-store, must-revalidate");
              res.header("Pragma", "no-cache");
              res.header("Expires", 0);
          }
          next();
      });

      app.use(express.static(path.join(rootPath, '.tmp')));
      app.use(express.static(path.join(rootPath, '../client')));
      app.use(express.static(path.join(rootPath, 'downloads')));
      app.use(express.errorHandler());
      app.use(compression());
      console.log(path.join(rootPath, '../client'));
      app.set('views', path.join(rootPath, '../client/modules'));
     // multipleViews(app, rootPath+'/app/modules');
  }
  if(serverConfig.env=='production'){
      app.use(express.static(path.join(rootPath, '.tmp')));
      app.use(express.static(path.join(rootPath, 'app-dist')));
      app.use(express.static(path.join(rootPath, 'downloads')));
      app.use(express.errorHandler());
      app.use(compression());
      app.set('views', rootPath + '/app-dist/views');
  }

  app.configure(function(){
     app.engine('html', require('ejs').renderFile);
     app.set('view engine', 'html');
     app.use(express.logger('dev'));
     app.use(express.bodyParser({limit: '50mb'}));
     app.use(express.methodOverride());
     app.use(express.cookieParser());
     app.use(express.session({
          store: new RedisStore({
              client: redisClient
          }),
          secret: 'em2015'
      }));

     // Router needs to be last
     app.use(app.router);
  });

};