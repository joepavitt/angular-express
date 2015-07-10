/* Respond to any get on page 1 with a thing1 JSON. HTTP code 200 */
exports.getThings1 = function(req, res, next) {
    res.json(200, {
        "thing1": 'payload'
    });
};

/* Respond to any get on page 2 with a thing2 JSON. HTTP code 200 */
exports.getThings2 = function(req, res, next) {
    res.json(200, {
        "thing2": 'payload'
    });
};
