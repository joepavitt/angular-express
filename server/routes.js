var path = require('path');
var errors = require('./components/errors');


module.exports = function(app) {

    // Insert routes below
    app.use('/api/sample', require('./api/sample'));
    app.use('/api/things', require('./api/things'));


    //TODO - FIX THE BELOW COMMENTED CODE
    // All undefined asset or api routes should return a 404
    /*app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);*/

    // All other routes should redirect to the index.html
    /*app.route('/*')
        .get(function(req, res) {
            res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
        });*/
};
