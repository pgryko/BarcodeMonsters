angular.module('barcodeMonsters').service('productList', [function () {
    var products = [];


    this.get = function () {
        return products;
    };

    this.add = function (product){
        products.push(angular.copy(product));
    };

    this.remove = function (product){
        var index = products.indexOf(product);
        if(index !== -1) {
            products.splice(index, 1);
            return product;
        }
    };

}]);