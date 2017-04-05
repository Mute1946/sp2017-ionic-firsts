factory('DataStore', function() {
    var DataStore = {
        city: 'Amarillo',
        lattitude: 35.2220,
        longitude: 101.8313 };
        
    DataStore.setCity = function (value) {
        DataStore.city = value;
    };
    
    DataStore.setLatitude = function (value) {
        DataStore.longitude = value;
    };
    
    DataStore.setLongitude = function (value) {
        DataStore.longitude = value;
    };
    
    return DataStore;
})
.factory('Weather', DarkSkyWeatherService);