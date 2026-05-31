// middleware/auth.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        const message = err.name === 'TokenExpiredError' ? 'Token expired, please login again' : 'Invalid token';
        console.error('Auth error:', err.message);
        res.status(401).json({ error: message });
    }
};

module.exports = auth;