angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = '';
  $scope.status;
  $scope.add = function() {
    Links.createLinks($scope.link)
    .then(function(data) {
      console.log('successful add to databse', data);
      $scope.link = '';
      $scope.status = 'Link successfully shortened and added to database';
    })
    .catch(function(error) {
      console.log('shorten links error', error);
      $scope.link = '';
      $scope.status = 'Link failed to be added, check url';
    });
    console.log('created', $scope.link);
  };
});
