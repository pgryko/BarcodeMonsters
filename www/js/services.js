'use strict';
angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('ProductsFactory', function($q, $http) {
    var urlRoot = 'https://secure.techfortesco.com/groceryapi/restservice.aspx?';
    var promise = $q.defer();

    function logFunction(a) {
        console.log(a);
        console.log("a");

    }

    function getSessionkey() {
        console.log("getting")
        return $http.jsonp(urlRoot + 'command=LOGIN&JSONP=JSON_CALLBACK&email=&password=&developerkey=0ujRTU8FlFnyfad11Ium&applicationkey=417361BD075D0FCFD502')
            .then(function(prod) {
                return prod.data.SessionKey;
            });
    }

    function getProductData(barcode) {
        getSessionkey().then(function(prod) {
        $http.jsonp(urlRoot)        // http://www.techfortesco.com/groceryapi_b1/restservice.aspx?
        // command=PRODUCTSEARCH&searchtext=chocolate&page=1&se

        });
    }

    function getProductByBarcode(barcode) {
        var object = {
            prodName: "string",
            nutInformation: {
                fat: 33,
                carb: 33,
                protein: 34,
            }
        }
        getProductData()
        promise.resolve(object)
        return promise.promise
    }
    return {
        getProductByBarcode: getProductByBarcode
    }
});
