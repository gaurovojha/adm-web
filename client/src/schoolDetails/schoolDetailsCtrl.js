/**
 *
 */
angular.module('niographADMWebApp')
	.controller('schoolDetailsCtrl', [ '$timeout', '$state', '$stateParams', '$scope', '$log', '$http', 'growlService', 'appService', 
		function($timeout, $state, $stateParams, $scope, $log, $http, growlService, appService) {

			$scope.$state = $state;
			
			$scope.load = function() {
				$log.debug('@@@@@@@@@@ :::: schoolDetailsCtrl --- load :::: @@@@@@@@@@@----> ', $state);
				
				if ($state.current.name == 'edukone.schoolDetails') {
					$scope.searchModel = {
						"searchText" : "",
						"selectedClass" : ""
					}
				}
				schoolDetailsData();
			};


			
			var schoolDetailsData = function() {
				appService.GETMethod('/institutes').then(
					function(dataResponse, status, headers, config) {
						//success
						$log.debug("********** institutes ", dataResponse);
						
						 $scope.schoolDetail = dataResponse[0];
						/*appUtils.defaultParseResponse(dataResponse, function(dataResponse) {
							$log.debug("**********", dataResponse);
							
						});*/
					})
			}

		} ]);