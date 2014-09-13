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
    .controller('MonsterGameCtrl', ['$scope', 'state', 'ProductsFactory',
        function($scope, state, ProductsFactory) {
            var states = ['normal', 'happy', 'normal', 'sad', 'confused', 'dead'];
            var currentPos = 0;
            $scope.state = state.happy;

            ProductsFactory.init()

            $scope.sendBarcode = function(barcode) {
                ProductsFactory.getProductData(barcode);
            }


            $scope.scanFood = function() {
                $scope.state = state[states[currentPos]];
                currentPos++;

                if (currentPos === 5) {
                    currentPos = 0;
                }
            };
            console.log('MONSTER GAME');

        }
    ]);
