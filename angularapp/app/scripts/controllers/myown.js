'use strict';

angular.module('genericApp')
  .controller('MyownCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.users = [
      {'firstName': 'Tim', 'surName': 'Test'},
      {'firstName': 'Tom', 'surName': 'Batarang'}
    ];
  });
