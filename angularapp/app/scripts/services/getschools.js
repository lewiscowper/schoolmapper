'use strict';

angular.module('genericApp')
  .service('Getschools', function Getschools($http) {
    $http({method: 'GET', url: 'https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20SCHNAME,%20ADDRESS1%20FROM%201ewb041RP_gOwqC5tazqe1sr6pxmphVo7fR_mokU&key=AIzaSyAve5zBLG_MzYdmGvb7c7nviUCf_PDPPaA'}).
  success(function(data, status, headers, config) {

    return data;
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  });
