'use strict';
angular.module('barcodeMonsters').controller('MonsterGameCtrl', ['$scope', 'state', 'Product', 'barcode', 'getState',
        function($scope, state, Product, barcode, getState) {
            $scope.state = state.happy;
            $scope.barcode = 'UNKNOWN';

            $scope.scanFood = function() {
                barcode.scan()
                    .then(getProductData)
                    .then(processMonsterState, showError);
            };

            //Local functions
            function getProductData(res) {
                return Product.get(res.text);
            }

            function processMonsterState(product){
                if(!product){
                    $scope.state = state.confused;
                    return;
                }

                $scope.state = getState(product);

            }

            function showError(error) {
                $scope.state = state.confused;
                console.log(Error);
            }

        }
    ]);
