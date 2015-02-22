(function() {
  'use strict';

  angular.module('app')
    .controller('Login', function($scope) {
      $scope.login = function() {
        console.log('hello');
      };
    });
}());
