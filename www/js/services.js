angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('ProductsFactory', function($q) {
    var promise = $q.defer()

    function getProductByBarcode(barcode) {
        var object = {
            prodName: "string",
            nutInformation: {
                fat: 33,
                carb: 33,
                protein: 34,
            }
        }

        promise.resolve(object)
        return promise.promise
    }
    return {
        getProductByBarcode: getProductByBarcode
    }
});
