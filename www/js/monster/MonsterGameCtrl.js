'use strict';
angular.module('barcodeMonsters')
    .constant('state', {
        'normal': {
            'img': 'img/Monster3/normal.png'
        },
        'confused': {
            'img': 'img/Monster3/confused.png'
        },
        'happy': {
            'img': 'img/Monster3/happy.png'
        },
        'sad': {
            'img': 'img/Monster3/sad.png'
        },
        'dead': {
            'img': 'img/Monster3/dead.png'
        }
    })
    .controller('MonsterGameCtrl', ['$scope', 'state', 'ProductsFactory', 'barcode', 'getState',
        function($scope, state, ProductsFactory, barcode, getState) {
            var states = ['normal', 'happy', 'normal', 'sad', 'confused', 'dead'];
            var currentPos = 0;
            $scope.state = state.happy;
            $scope.barcode = 'UNKNOWN';
            ProductsFactory.init()


            $scope.sendBarcode = function(barcode) {
                ProductsFactory.getProductData(barcode);
            };
            var states = ['normal', 'happy', 'normal', 'sad', 'confused', 'dead'];
            var currentPos = 0;
            $scope.state = state.happy;
            $scope.msg = '';

            $scope.scanFood = function() {
                barcode.scan()
                    .then(getProductData)
                    .then(processMonsterState)
                    .then(changeMonsterState(), showError);
            };

            //Local functions
            function getProductData(res) {
                return Product.get(res.text);
            }

            function processMonsterState(productData) {
                console.log('product data', productData);
                $scope.msg = 'mmmm ' + productData.name;
                return productData;
            }

            function changeMonsterState(product) {
                $scope.state = state[states[currentPos]];
                currentPos++;

                if (currentPos === 5) {
                    currentPos = 0;
                }
            }

            function showError(error) {
                $scope.state = state.confused;
                console.log(Error);
            }

        }
    ]);
