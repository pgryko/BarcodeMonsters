angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

     $scope.barcode = "NOTHING SCANNED";
     $scope.scan = function(){
         cordova.plugins.barcodeScanner.scan(
             function (result) {
                 $scope.barcode = result;
             },
             function (error) {
                 alert("Scanning failed: " + error);
             }
         );
     }

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
