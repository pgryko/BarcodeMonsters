'use strict';
angular.module('barcodeMonsters').controller('MonsterGameCtrl', ['$scope', 'state', 'Product', 'barcode', 'getState', '$interval', 'productList',
    function ($scope, state, Product, barcode, getState, $interval, productList) {
        $scope.state = state.happy;
        $scope.barcode = 'UNKNOWN';

        $scope.scanFood = function () {
            barcode.scan()
                .then(showMonsterEating)
                .then(getProductData)
                .then(addProductToList)
                .then(processMonsterState, showError);
        };

        //Local functions
        function showMonsterEating(res) {
            var EATING_STATES = 4;
            var count = 0;
            return $interval(function () {
                var stateNum = count % EATING_STATES;
                $scope.state = state['eating' + stateNum];
                count++;
            }, 200, 8).then(function () {
                return res;
            });
        }

        function addProductToList(product){
            productList.add(product);
            return product;
        }

        function getProductData(res) {
            return Product.get(res.text);
        }

        function processMonsterState(product) {
            $scope.state = getState(product);
        }

        function showError(error) {
            $scope.state = state.confused;
            console.log(Error);
        }
    }
]);
