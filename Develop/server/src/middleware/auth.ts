import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODONE: verify the token exists and add the user data to the request object

  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token found.' });
  }

  try {
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret) as JwtPayload;

    req.user = {
      username: decoded.username
    };

    return next();
  } catch (error) {
    console.log('Error during token verification:', error);
    return res.status(403).json({ message: 'Access denied. Invalid token.' });
  }
};
