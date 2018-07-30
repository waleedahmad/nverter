const uuidv4 = require('uuid/v4');

module.exports = (options = null) => {
    return (req, res, next) => {
        const cookie = req.cookies._uid;
        if (cookie === undefined) {
            res.cookie('_uid', uuidv4(), { maxAge : (3600000 * 24) * 30 , httpOnly: false, domain : '127.0.0.1' });
        }
        next()
    }
}