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

    .controller('MonsterGameCtrl', ['$scope', 'state', 'ProductsFactory', 'barcode',
        function($scope, state, ProductsFactory, barcode) {
            var states = ['normal', 'happy', 'normal', 'sad', 'confused', 'dead'];
            var currentPos = 0;
            $scope.state = state.happy;
            ProductsFactory.init()

            $scope.sendBarcode = function(barcode) {
            	console.log(barcode)
                ProductsFactory.getProductData(barcode);
            };


            $scope.scanFood = function() {
                $scope.state = state[states[currentPos]];
                currentPos++;

                if (currentPos === 5) {
                    currentPos = 0;
                }
            };

        //Local functions

        function changeMonsterState() {
            $scope.state = state[states[currentPos]];
            currentPos++;

            if (currentPos === 5) {
                currentPos = 0;
            }
        }

        function showError(error){
            $scope.state = state.confused;
            console.log(Error);
        }

        }
    ]);
