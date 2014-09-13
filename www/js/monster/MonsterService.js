'use strict';
angular.module('barcodeMonsterService', [])

/**
 * A simple example service that returns some data.
 */
.factory('getState', function() {
    return function(cals) {
        if (cals > 50) {
            return 'sad';
        }
        return 'happy';
    }
});
