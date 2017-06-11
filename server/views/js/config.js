niographADMWebApp
    .config(function ($stateProvider, $urlRouterProvider){
//        $urlRouterProvider.otherwise("/home");
        $urlRouterProvider.otherwise("/welcome-edukone");


        $stateProvider
        
        	//---------------------------------------------------------------------
      		// ----- EDUKONE HOME ----- 
      		// This is a base home at root level.
      		//---------------------------------------------------------------------		
      		.state('edukoneHome', {
      			url : '/welcome-edukone',
      			templateUrl : './src/admHome/admHome.html',
      			controller: "admHomeCtrl",
      			resolve : {
      				loadPlugin : function($ocLazyLoad) {
      					return $ocLazyLoad.load([
      						{
      							name : 'css',
      							insertBefore : '#app-level',
      							files : [
      								'./vendors/bower_components/fullcalendar/dist/fullcalendar.min.css',
      						        './vendors/bower_components/nouislider/jquery.nouislider.css',
                                    './vendors/farbtastic/farbtastic.css',
                                    './vendors/bower_components/summernote/dist/summernote.css',
                                    './vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                                    './vendors/bower_components/chosen/chosen.min.css'
      							]
      						},
      						{
      							name : 'vendors',
      							insertBefore : '#app-level-js',
      							files : ['./src/admHome/admHomeCtrl.js',
      								'./vendors/sparklines/jquery.sparkline.min.js',
      								'./vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
      								'./vendors/bower_components/simpleWeather/jquery.simpleWeather.min.js',
      								 './vendors/input-mask/input-mask.min.js',
                                     './vendors/bower_components/nouislider/jquery.nouislider.min.js',
                                     './vendors/bower_components/moment/min/moment.min.js',
                                     './vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                                     './vendors/bower_components/summernote/dist/summernote.min.js',
                                     './vendors/fileinput/fileinput.min.js',
                                     './vendors/bower_components/chosen/chosen.jquery.js',
                                     './vendors/bower_components/angular-chosen-localytics/chosen.js',
                                     './vendors/bower_components/angular-farbtastic/angular-farbtastic.js'
      							]
      						},
      						
      					])
      				}
      			}
      		})
      		
      		//--------------------------------------------------------------------
			// EDUKONE COMMON MODULE
			// This is common module to load Header, Footer, Menu, Chat box etc.
			//--------------------------------------------------------------------
			.state('edukone', {
				url : '/edukone',
				templateUrl: './views/common.html'
			})
              
            //----------------------------------------
            // EDUKONE Summary MODULE -- START
            //----------------------------------------          
           .state('edukone.admSummary', {
                url: "/edukone-results",
                templateUrl: "./src/admSummary/admSummary.html",
                controller: "admSummaryCtrl",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                        	{
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [
                                	 './vendors/bower_components/nouislider/jquery.nouislider.css',
                                     './vendors/farbtastic/farbtastic.css',
                                     './vendors/bower_components/summernote/dist/summernote.css',
                                     './vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                                     './vendors/bower_components/chosen/chosen.min.css'
                              ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                	'./src/admSummary/admSummaryCtrl.js',
                                    './vendors/input-mask/input-mask.min.js',
                                    './vendors/bower_components/nouislider/jquery.nouislider.min.js',
                                    './vendors/bower_components/moment/min/moment.min.js',
                                    './vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                                    './vendors/bower_components/summernote/dist/summernote.min.js',
                                    './vendors/fileinput/fileinput.min.js',
                                    './vendors/bower_components/chosen/chosen.jquery.js',
                                    './vendors/bower_components/angular-chosen-localytics/chosen.js',
                                    './vendors/bower_components/angular-farbtastic/angular-farbtastic.js'
                                ]
                            }
        
                        ]);
                    }
                }
            }) 
			//----------------------------------------
            // EDUKONE Summary MODULE -- END
            //----------------------------------------  
              
            //----------------------------------------
            // EDUKONE school details MODULE -- START
            //----------------------------------------          
           .state('edukone.schoolDetails', {
                url: "/school-details",
                templateUrl: "./src/schoolDetails/schoolDetails.html",
                controller: "schoolDetailsCtrl",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                        	{
                                name: 'css',
                                insertBefore: '#app-level',
                                files: [ './vendors/bower_components/autosize/dist/autosize.min.js',
                                    './vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'        ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                	'./src/schoolDetails/schoolDetailsCtrl.js',
                                	'./vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                                    './vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                                ]
                            }
        
                        ]);
                    }
                }
            }) 
			//----------------------------------------
            // EDUKONE school details MODULE -- END
            //----------------------------------------  
                
         });
