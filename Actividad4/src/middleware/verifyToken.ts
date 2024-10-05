// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// const jwtSecret = process.env.JWT_SECRET || 'secret';

// export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ error: 'Token no proporcionado' });
//   }

//   try {
//     const payload = jwt.verify(token, jwtSecret) as { id: number, nombre: string, estado: string };
//     if (payload.estado !== 'Activo') {
//       return res.status(403).json({ error: 'Usuario inactivo' });
//     }
//     req.body.usuario = payload;
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: 'Token inválido' });
//   }
// };
// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// const jwtSecret = process.env.JWT_SECRET || 'secret';

// export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ error: 'Token no proporcionado' });
//   }

//   try {
//     const payload = jwt.verify(token, jwtSecret) as { id: number, nombre: string, estado: string };
//     if (payload.estado !== 'Activo') {
//       return res.status(403).json({ error: 'Usuario inactivo' });
//     }
//     req.body.usuario = payload;
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: 'Token inválido' });
//   }
// };

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'secret';

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as jwt.JwtPayload;

    // Agregar user al objeto de request sin extender el tipo Request
    (req as any).user = {
      id: decoded.id,
      nombre: decoded.nombre,
      estado: decoded.estado,
    };

    next(); // Continuamos con el siguiente middleware o ruta
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(403).json({ message: 'Token invalid or expired' });
    return;
  }
};

export default verifyToken;

