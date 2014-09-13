'use strict';
angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('ProductsFactory', function($q, $interval, $http) {
        var urlRoot = 'https://secure.techfortesco.com/groceryapi/restservice.aspx?';
        var jcb = '&JSONP=JSON_CALLBACK';
        var promise = $q.defer();
        var stop;

        function init() {
            getSessionkey();
            var intervalFunc = $interval(function() {
                getProductData(111111111111111111111111);
            }, 10000);
        }

        function getSessionkey() {
            var sessionKey;
            promise = $q.defer();
            promise.resolve(sessionKey)

            if (typeof sessionKey === 'undefined') {
                return $http.jsonp(urlRoot + 'command=LOGIN' + jcb + '&email=&password=&developerkey=0ujRTU8FlFnyfad11Ium&applicationkey=417361BD075D0FCFD502')
                    .then(function(prod) {
                        sessionKey = prod.data.SessionKey;
                        return prod.data.SessionKey;
                    });
            } else {
                return promise.promise
            }
        }

        function getProductData(barcode) {
            if (barcode === null) {
                barcode = 1212;
            }
            getSessionkey().then(function(sessionKey) {
                $http.jsonp(urlRoot + 'command=PRODUCTSEARCH&EXTENDEDINFO=Y&searchtext=' + barcode + jcb + '&sessionkey=' + sessionKey)
                    .then(function(productData) {
                        return productData.data.Products[0];
                    });
            });
        }

        function getProductByBarcode(barcode) {
            var object = {
                prodName: "string",
                nutInformation: {
                    fat: 33,
                    carb: 33,
                    protein: 34
                }
            };
            getProductData();
            promise.resolve(object);
            return promise.promise;
        }
        return {
            getProductByBarcode: getProductByBarcode,
            init: init
        }
    });