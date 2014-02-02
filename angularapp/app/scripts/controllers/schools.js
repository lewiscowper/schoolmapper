'use strict';

angular.module('genericApp')
  .controller('SchoolsCtrl', function ($scope, $routeParams, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+URN,+SCHNAME+FROM+1ewb041RP_gOwqC5tazqe1sr6pxmphVo7fR_mokU&key=AIzaSyAve5zBLG_MzYdmGvb7c7nviUCf_PDPPaA').success(function(data, status, headers, config) {
      $scope.fusionSchools = data;
    });
  });

angular.module('genericApp')
  .controller('SchoolCtrl', function ($scope, $routeParams, $http) {

    $scope.params = $routeParams;

    $scope.selectedSchool = [];

    $http.get('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1ewb041RP_gOwqC5tazqe1sr6pxmphVo7fR_mokU+WHERE+URN=' + $scope.params.uuid +'&key=AIzaSyAve5zBLG_MzYdmGvb7c7nviUCf_PDPPaA').success(function(data, status, headers, config) {
      $scope.selectedSchool = data;

      $scope.school = $scope.selectedSchool.rows[0];
    });

  });