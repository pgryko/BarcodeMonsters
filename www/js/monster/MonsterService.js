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
        'dead': {
            'img': 'img/Monster3/dead.png'
        },
        'eating0': {
            'img': 'img/Monster3/eating/eating0.png'
        },
        'eating1': {
            'img': 'img/Monster3/eating/eating1.png'
        },
        'eating2': {
            'img': 'img/Monster3/eating/eating2.png'
        },
        'eating3': {
            'img': 'img/Monster3/eating/eating3.png'
        }
    })

/**
 * A simple example service that returns some data.
 */
    .factory('getState', function (state) {
        var states = ['normal', 'happy', 'normal', 'sad', 'confused', 'dead'];
        var currentPos = 0;
        return function (product) {
            var st;

            if (!product) {
                return state.confused;
            }

            st = state[states[currentPos]];
            currentPos++;

            if (currentPos === 5) {
                currentPos = 0;
            }

            return st;
        }
    });
