import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // TODONE: verify the token exists and add the user data to the request object
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token found.' });
    }
    try {
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret);
        req.user = {
            username: decoded.username
        };
        return next();
    }
    catch (error) {
        console.log('Error during token verification:', error);
        return res.status(403).json({ message: 'Access denied. Invalid token.' });
    }
};
