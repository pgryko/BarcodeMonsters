angular.module('barcode', [])
    .factory('barcode', ['$q', function($q){
        return {
            scan: function(){
                var deferred = $q.defer();

                cordova.plugins.barcodeScanner.scan(
                    function(result) {
                        deferred.resolve(result);
                    },
                    function(error) {
                        deferred.reject(error);
                    }
                );

                return deferred.promise;
            }
        }
    }]);