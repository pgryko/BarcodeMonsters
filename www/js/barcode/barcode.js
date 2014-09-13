angular.module('barcode', [])
    .factory('barcode', ['$q', function($q){
        return {
            scan: function(){
                var deferred = $q.defer();

                if(window.cordova) {
                    window.cordova.plugins.barcodeScanner.scan(
                        function(result) {
                            deferred.resolve(result);
                        },
                        function(error) {
                            deferred.reject(error);
                        }
                    );
                } else {
                    deferred.resolve({
                        text: '54491496'
                    });
                }


                return deferred.promise;
            }
        }
    }]);