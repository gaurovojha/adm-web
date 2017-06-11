/**
 *
 */
angular.module('niographADMWebApp')
	.controller('admHomeCtrl', [ '$timeout', '$state', '$stateParams', '$scope', '$log','$window', '$http', 'growlService', 'appService',
		function($timeout, $state, $stateParams, $scope, $log,$window, $http, growlService, appService) {

			$scope.$state = $state;

			$scope.load = function() {
				$log.debug('@@@@@@@@@@ :::: admHomeCtrl --- load :::: @@@@@@@@@@@----> ', $state);
				$scope.selectedClass = '';
				if ($state.current.name == 'edukoneHome') {
					$scope.searchModel = {
							"establishedOn" : "2014-02-09",
							"ownership" : "private",
							"offerings" : [ {
								"id" : "2"
							} ],
							"types" : [ {
								"id" : "2"
							} ],
							"city" : {
								"id" : "1"
							},
							"zipCode" : "411013"
						}
				}
			};
			
			 // Any function returning a promise object can be used to load values asynchronously
	        $scope.getLocation = function(val) {
	            return $http.get('//maps.googleapis.com/maps/api/geocode/json?components=country:IN', {
	                params: {
	                    address: val,
	                    sensor: false
	                }
	            }).then(function(response){
	                return response.data.results.map(function(item){
	                	$log.debug("formatted address ---------- ",item);
	                    return item.formatted_address;
	                });
	            });
	        }
	        
			 $scope.tabs = [
		            {
		                title:'Play Schools',
		                content:'In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nam eget dui. In ac felis quis tortor malesuada pretium. Phasellus consectetuer vestibulum elit. Duis lobortis massa imperdiet quam. Pellentesque commodo eros a enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Phasellus a est. Pellentesque commodo eros a enim. Cras ultricies mi eu turpis hendrerit fringilla. Donec mollis hendrerit risus. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Praesent egestas neque eu enim. In hac habitasse platea dictumst.'
		            },
		            {
		                title:'Schools',
		                content:'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla sit amet est. Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit ac nisl. Nulla porta dolor. Cras dapibus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.',
		            },
		            {
		                title:'Coaching Centres',
		                content:'Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis. Etiam ut purus mattis mauris sodales aliquam. Aenean viverra rhoncus pede. Nulla sit amet est. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Praesent ac sem eget est egestas volutpat. Cras varius. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Fusce vel dui.Morbi mattis ullamcorper velit. Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis. Etiam ut purus mattis mauris sodales aliquam. Aenean viverra rhoncus pede. Nulla sit amet est. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Praesent ac sem eget est egestas volutpat. Cras varius. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Fusce vel dui.',
		            },
		            {
		                title:'Colleges',
		                content:'Praesent turpis. Phasellus magna. Fusce vulputate eleifend sapien. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.',
		            }
		        ];

		        $scope.user={addCollege:"",addLocation:""};
		       $scope.addCollegeAndLocation= function(user){
				  $scope.addNCollege=user.addCollege;
				  $scope.addNLocation=user.addLocation;
				   
				   $state.go("edukone.admSummary");
				 
			 }
		       

			 $scope.somePlaceholder='new index';


/*
			 $scope.searchFromHome= function(){
				 
				 $state.go("edukone.admSummary");
			 }
*/

		} ]);