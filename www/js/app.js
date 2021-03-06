// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('barcodeMonsters', ['ionic', 'barcode', 'starter.services', 'barcodeMonsterService'])

    .run(function ($ionicPlatform, Product) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        Product.init();
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('monster', {
                url: "/monster",
                abstract: true,
                templateUrl: "templates/monster/monster.html"
            })

            .state('monster.basket', {
                url: "/basket",
                views: {
                    'monster-basket' : {
                        templateUrl: 'templates/monster/monster-basket.html',
                        controller: 'MonsterBasketCtrl'
                    }
                }
            })

            .state('monster.game', {
                url: "/game",
                views: {
                    'monster-game' : {
                        templateUrl: 'templates/monster/monster-game.html',
                        controller: 'MonsterGameCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/monster/game');

    });

