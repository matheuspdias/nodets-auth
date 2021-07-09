import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware ( req: Request, res: Response, next: NextFunction ) {
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'

    if (!token) {
        res.status(401).json({
            'message': 'Não autorizado'
        })
    }

    try {
        const data = jwt.verify(token, `${process.env.SECRET}`);

        const { id } = data as TokenPayload;

        req.userId = id;

        return next();
    } catch (err) {
        console.log(err)
    }
}