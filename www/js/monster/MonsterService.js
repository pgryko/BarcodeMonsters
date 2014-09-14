'use strict';
angular.module('barcodeMonsterService', [])
    .constant('state', {
        'normal': {
            'img': 'img/Monster3/normal.png',
            'msg': "I'm OK now"
        },
        'confused': {
            'img': 'img/Monster3/confused.png',
            'msg': "What is this??"
        },
        'happy': {
            'img': 'img/Monster3/happy.png',
            'msg': "MMMM, Delicious"
        },
        'sad': {
            'img': 'img/Monster3/sad.png',
            'msg': "I don't like it"
        },
        'superSad': {
            'img': 'img/Monster3/super-sad.png',
            'msg': "I hate this"
        },
        'dead': {
            'img': 'img/Monster3/dead.png',
            'msg': "Dead"
        },
        'eating0': {
            'img': 'img/Monster3/eating/eating0.png',
            'msg': "."
        },
        'eating1': {
            'img': 'img/Monster3/eating/eating1.png',
            'msg': ".."
        },
        'eating2': {
            'img': 'img/Monster3/eating/eating2.png',
            'msg': "..."
        },
        'eating3': {
            'img': 'img/Monster3/eating/eating3.png',
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
