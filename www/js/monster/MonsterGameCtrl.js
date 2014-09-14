'use strict';
angular.module('barcodeMonsters').controller('MonsterGameCtrl', ['$scope', 'state', 'Product', 'barcode', 'getState', '$interval', 'productList',
    function ($scope, state, Product, barcode, getState, $interval, productList) {
        $scope.state = state.happy;
        $scope.barcode = 'UNKNOWN';
        updateMonsterSize();
        $scope.scanFood = function () {
            barcode.scan()
                .then(showMonsterEating)
                .then(getProductData)
                .then(addProductToList)
                .then(processMonsterState)
                .then(updateMonsterSize, showError);
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
            if(product){
                productList.add(product);
            }
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

        function updateMonsterSize(){
            var avgCals = calcAverageCalories();
            $scope.monsterSize = getSizeClass(avgCals);
        }

        function calcAverageCalories(){
            var cals = 0;
            var products = productList.get();
            angular.forEach(products, function(p){
                cals += p.calories;
            });

            return cals / products.length;
        }

        function getSizeClass(avgCals){
            if(avgCals < 30){
                return 'BIG';
            }

            if(avgCals < 70){
                return 'MEDIUM';
            }

            return 'SMALL';
        }
    }
]);
