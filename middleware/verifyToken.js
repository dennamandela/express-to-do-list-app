const Users = require('../models/user').User;
const Todos = require('../models/todo').Todo;
const jwt = require('jsonwebtoken');

module.exports = {
    authenticateToken: (req, res, next) => {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1];

        if (!token) {
            return res.status(401).send({
                message: 'Unauthorized',
            })
        }

        try {
            const verify = jwt.verify(token, process.env.TOKEN_SECRET)
            if(!verify) {
                return res.status(403).send({
                    message: 'Invalid token',
                })
            }

            req.user = verify;
            next();

        } catch (err) {
            res.status(500).send({
                message: err.message || 'Internal Server Error'
            })
        }
    }
}