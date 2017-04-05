angular.module('App')
.controller('RatesController', function ($scope, $http, Currencies) {
    
    $scope.currencies = Currencies;
    
    $scope.load = function () {
        $http.get('https://api.bitcoinaverage.com/tickeer/all').success(
            function (tickers) {
                angular.forEach($scope.currencies, function (currency) {
                    currency.ticker = tickers[currency.code];
                    currency.ticker.timestamp = new Date(currency.ticker.timestamp);
                });
            });
    };
        
    $scope.load();
});