angular.module('barcodeMonsters')
    .controller('MonsterBasketCtrl', ['$scope', 'productList', function($scope, productList){
        $scope.products = productList.get();

        $scope.remove =  function(product){
            productList.remove(product);
        };

    }]);