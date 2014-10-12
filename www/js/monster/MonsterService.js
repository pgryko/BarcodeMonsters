'use strict';
angular.module('barcodeMonsterService', [])
    .constant('state', {
        'normal': {
            'img': 'img/Monster1/normal.png',
            'msg': 'Hello!'
        },
        'confused': {
            'img': 'img/Monster1/confused.png',
            'msg': 'What is this??'
        },
        'happy': {
            'img': 'img/Monster1/happy.png',
            'msg': 'MMMM, Delicious'
        },
        'sad': {
            'img': 'img/Monster1/sad.png',
            'msg': 'I don\'t like it'
        },
        'superSad': {
            'img': 'img/Monster1/super_sad.png',
            'msg': 'I hate this'
        },
        'dead': {
            'img': 'img/Monster1/dead.png',
            'msg': 'Dead'
        },
        'eating0': {
            'img': 'img/Monster1/eating/eating0.png',
            'msg': '.',
            'sound': 'audio/funny_bite.mp3' //later functionality, contain audio within state
        },
        'eating1': {
            'img': 'img/Monster1/eating/eating1.png',
            'msg': '..',
            'sound': 'audio/eating_an_apple_loudly.mp3'
        },
        'eating2': {
            'img': 'img/Monster1/eating/eating2.png',
            'msg': '...'
        },
        'eating3': {
            'img': 'img/Monster1/eating/eating3.png',
            'msg': '...'
        }
    })

.factory('getState', function(state) {
    return function(product) {
        var calories = product.calories;

        if (calories < 30) {
            return state.happy;
        }

        if (calories < 70) {
            return state.sad;
        }

        return state.superSad;
    };
})

.factory('audioService', ['$ionicPlatform', function($ionicPlatform) {
    var audio;
    if (window.cordova) {
        $ionicPlatform.ready(function() { // wait till plugin loaded
            audio = new Media('/android_asset/www/audio/eating_an_apple_loudly.mp3'); //annoying cordova path modification
        });
    } else {
        audio = new Audio('/audio/eating_an_apple_loudly.mp3');
    }
    var obj = {
        startSound: function() {
            audio.play();
        },
        stopSound: function() {
            audio.pause(); //for browser testing, no stop function in browser audio
            audio.stop();
        }
    };
    return obj;
}]);
