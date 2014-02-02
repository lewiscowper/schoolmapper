'use strict';

angular.module('genericApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'MyownCtrl'
      })
      .when('/schools', {
        templateUrl: 'views/schools.html',
        controller: 'SchoolsCtrl'
      })
      .when('/school/:uuid', {
        templateUrl: 'views/school.html',
        controller: 'SchoolCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
