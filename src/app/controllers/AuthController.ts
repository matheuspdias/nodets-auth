import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class AuthController {
    async authenticate (req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email } })

        if (!user) {
            return res.status(401).json({
                'message': 'Usuário e/ou senha incorretos!'
            })
        }

        const isValidaPassword = await bcrypt.compare(password, user.password);

        if(!isValidaPassword) {
            return res.status(401).json({
                'message': 'Usuário e/ou senha incorretosss!'
            })
        }

        const token = jwt.sign({ id: user.id }, `${process.env.PORT}`, { expiresIn: '1d' });

        delete user.password;

        return res.json({
            user,
            token
        });
    }
}

export default new AuthController();