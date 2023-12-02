import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/', ProductController.InsertIntoDB);
router.get('/', ProductController.GetAllFromDB);
router.patch('/:id', ProductController.UpdateIntoDB);
router.delete('/:id', ProductController.DeleteFromDB);

export const ProductRoutes = router;
