angular.module('barcodeMonsters')
    .controller('MonsterBasketCtrl', ['$scope', 'productList', function($scope, productList){
        $scope.products = productList.get();

        $scope.remove =  function(product){
            productList.remove(product);
        };

        $scope.getProductColor = function(product){
            if(product.calories < 30){
                return 'green';
            }

            if(product.calories < 70){
                return 'orange';
            }

            return 'red';
        };
    }]);