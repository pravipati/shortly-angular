angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = '';
  $scope.createLink = [];
  $scope.add = function() {
    $scope.createLink.push($scope.link);
    console.log('created', $scope.createLink);
  };
  console.log($scope.link);
});



// .controller('LinksController', function ($scope, Links) {
//   // Your code here
//   $scope.data = {};
//   $scope.getLinks = Links
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.log('error', error);
//   });

//   // $scope.getLinks();

// });
