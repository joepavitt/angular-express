/* Respond to any get on page 1 with a sample1 JSON. HTTP code 200 */
exports.getStuff1 = function(req, res) {
    res.json(200, {
        "sample1": 'payload'
    });
};

/* Respond to any get on page 2 with a sample2 JSON. HTTP code 200 */
exports.getStuff2 = function(req, res) {
    res.json(200, {
        "sample2": 'payload'
    });
};

/* Echo post if device field defined in body, otherwise respond with error. HTTP code 400 */
exports.postStuff = function (req, res) {
    var body = req.body;
    if (!body.device) {
        res.status(400).send("No <device> defined");
    } else {
        res.json(req.body);
    }
};
