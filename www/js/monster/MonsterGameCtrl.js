'use strict';
angular.module('barcodeMonsters').controller('MonsterGameCtrl', ['$scope', 'state', 'Product', 'barcode', 'getState', '$interval', 'productList', 'audioService',
    function ($scope, state, Product, barcode, getState, $interval, productList, audioService) {
        console.log( calcAverageCalories() );

        $scope.state = productList.get().length === 0 ? state.normal : getState({calories: calcAverageCalories()});
        $scope.barcode = 'UNKNOWN';
        updateMonsterSize();
        $scope.scanFood = function () {
            barcode.scan()
                .then(playEatingSound)
                .then(showMonsterEating)
                .then(stopEatingSound)
                .then(getProductData)
                .then(addProductToList)
                .then(processMonsterState)
                .then(updateMonsterSize, showError);
        };

        //Local functions
        function playEatingSound(res){

            audioService.startSound();
            return res;
        }
        function stopEatingSound(res){
            audioService.stopSound();
            return res;
        }
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
