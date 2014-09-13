angular.module('barcodeMonsters').service('Product', ['$http', function($http){
     var dataPromise;

    this.init = function (){
        dataPromise = $http.get('data/data.json')
            .then(function(data){
              console.log(data);
              return data;
          });
    }
}]);