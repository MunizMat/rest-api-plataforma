import { Router } from 'express';
import userController from '../controllers/userController';

const router = new Router();

router.get('/', userController.index);
router.post('/', userController.store);
router.put('/', userController.update);
router.delete('/', userController.delete);

export default router;
