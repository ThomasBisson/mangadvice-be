import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeaders = req.get('Authorization');
  if (!authHeaders) {
    req.body.isAuth = false;
    return next();
  }

  // Extract that token using
  const token = authHeaders.split(' ')[1];
  if (!token || token === '') {
    req.body.isAuth = false;
    return next();
  }

  // Decode that token using verify
  let decodedToken;
  try {
    decodedToken = verify(token, process.env.JWT_ACCESS_TOKEN_SECRET as string);
  } catch (err) {
    req.body.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.body.isAuth = false;
    return next();
  }

  // Find the user from the Database
  // const authUser = await User.findById(decodedToken.id);
  // if (!authUser) {
  //   req.body.isAuth = false;
  //   return next();
  // }
  // // Set the req user to the fetched user
  // req.user = authUser;
  // req.body.isAuth = true;
  return next();

  //   // Get token from header
  //   const token = req.header('x-auth-token');

  //   // Check if no token
  //   if (!token) {
  //     return res.status(401).json({ msg: 'No token, authorization denied' });
  //   }

  //   // Verify token
  //   try {
  //     const decoded = verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
  //     req.user = decoded.user;
  //     next();
  //   } catch (err) {
  //     res.status(401).json({ msg: 'Token is not valid' });
  //   }
};
