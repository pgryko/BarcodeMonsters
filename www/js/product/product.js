angular.module('barcodeMonsters').service('Product', ['$http', function ($http) {
    var dataPromise;

    this.init = function () {
        dataPromise = $http.get('data/data.json')
            .then(function (res) {
                var dataMap = {};
                angular.forEach(res.data.data, function (item) {
                    dataMap[item.barcode] = item;
                });

                return dataMap;
            });
    };

    this.get = function (barcode){
        return dataPromise.then(function(data){
            return data[barcode];
        });
    };


}]);