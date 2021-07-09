import { Router, Response, Request } from 'express';
import authMiddleware from '../app/middlewares/authMiddleware';
import UserController from '../app/controllers/UserController';
import AuthController from '../app/controllers/AuthController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('API NodeTS-Auth')
});
router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
router.get('/users', authMiddleware, UserController.index);

export default router;