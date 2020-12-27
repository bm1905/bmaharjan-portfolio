const User = require('../model/user');
const config = require('../config');
const { normalizeErrors } = require('../helpers/mongoose');

exports.ip = function (req, res) {
    const { ip, carrier, city, country, latitude, longitude, region, postal, time } = req.body;

    const user = new User({
        ip, carrier, city, country, latitude, longitude, region, postal, time
    });

    User.findOneAndUpdate({ ip }, { $set: { time }, $inc: { count: 1 } }, { new: true }, function (err, existingIp) {
        if (err) {
            return res.status(422).send({ errors: normalizeErrors(err.errors) });
        }
        if (!existingIp) {
            user.save(function (err) {
                if (err) {
                    return res.status(422).send({ errors: normalizeErrors(err.errors) });
                }
                return res.json({ 'Initial Save': true });
            });
        } else {
            return res.json({ 'Increase Counter': true });
        }
    })
};
