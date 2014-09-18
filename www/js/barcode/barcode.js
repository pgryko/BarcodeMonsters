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
                    var x = Math.random();

                    if (x<0.333) {
                        deferred.resolve({
                            text: '54491496'
                        });
                    } else if (x < 0.666) {
                        deferred.resolve({
                            text: '54491472'
                        });
                    } else {
                        deferred.resolve({
                        text: '5449000052971'
                        });
                    }
                }


                return deferred.promise;
            }
        }
    }]);