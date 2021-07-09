import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
    async index ( req: Request, res: Response ) {
        const repository = getRepository(User)

        const users = await repository.find();

        users.forEach(user => {
            delete user.password;
          });

        return res.json({ users });
    }

    async store (req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const userExists = await repository.findOne({ where: { email } });

        if (userExists) {
            return res.status(409).json({
                'message': 'email já cadastrado'
            })
        }

        const user = repository.create({ email, password });
        await repository.save(user);

        return res.json(user);
    }
}

export default new UserController();