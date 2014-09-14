'use strict';
angular.module('barcodeMonsterService', [])
    .constant('state', {
        'normal': {
            'img': 'img/Monster1/normal.png',
            'msg': "Hello!"
        },
        'confused': {
            'img': 'img/Monster1/confused.png',
            'msg': "What is this??"
        },
        'happy': {
            'img': 'img/Monster1/happy.png',
            'msg': "MMMM, Delicious"
        },
        'sad': {
            'img': 'img/Monster1/sad.png',
            'msg': "I don't like it"
        },
        'superSad': {
            'img': 'img/Monster1/super_sad.png',
            'msg': "I hate this"
        },
        'dead': {
            'img': 'img/Monster1/dead.png',
            'msg': "Dead"
        },
        'eating0': {
            'img': 'img/Monster1/eating/eating0.png',
            'msg': "."
        },
        'eating1': {
            'img': 'img/Monster1/eating/eating1.png',
            'msg': ".."
        },
        'eating2': {
            'img': 'img/Monster1/eating/eating2.png',
            'msg': "..."
        },
        'eating3': {
            'img': 'img/Monster1/eating/eating3.png',
            'msg': "..."
        }
    })

/**
 * A simple example service that returns some data.
 */
    .factory('getState', function (state) {
        return function (product) {
            var calories = product.calories;

            if(calories < 30){
                return state.happy;
            }

            if(calories < 70){
                return state.sad;
            }

            return state.superSad;
        }
    });
