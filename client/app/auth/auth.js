// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth, Validate) {
  $scope.user = {};
  $scope.status = "";
  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
        $scope.status = 'Invalid username or password';
        // $location.path('/signup');
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.validateUser = function(form) {
    var validated = Validate.validateUser($scope.user);
    if( validated && form === 'signup') {
      $scope.signup();
    } else if ( validated && form === 'signin' ) {
      $scope.signin();
    } else if ( form === 'signup') {
      $scope.status = 'Name and password should be greater than 10 characters';
    } else {
      $scope.status = 'Invalid username or password';
    }

  };
});
