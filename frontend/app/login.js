(function() {
  'use strict';

  angular.module('app')
    .controller('Login', function($http, $scope, $auth) {
      $scope.isAuthenticated = $auth.isAuthenticated;
      $scope.logout = function() {
        $auth.logout();
      };

      $scope.login = function() {
        $auth.authenticate('twitter');
      };

      $scope.tweet = function() {
        $http.post('/api/post/tweet', {
            message: $scope.message
          })
          .then(function() {});
      };

      $scope.time = new Date();
      $scope.minDate = new Date();
      $scope.opened = false;
      $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = !$scope.opened;
      };
    });
}());
