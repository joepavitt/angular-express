angular.module('App')
    .filter('bytesfilter', function() {
        var units = ['bytes', 'kB', 'MB'];

        return function filesize(bytes) {
            var exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
            var number = (bytes / Math.pow(1024, Math.floor(exponent))).toFixed(0);
            return number + ' ' + units[exponent];
        };
    });
