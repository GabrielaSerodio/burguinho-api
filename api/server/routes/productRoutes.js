import { Router } from 'express';
import productController from '../src/controllers/productController';

const router = Router()
router.get('/', productController.getAllProducts)
router.post('/', productController.addProduct)
router.get('/:id', productController.getProduct)
router.put('/:id', productController.updatedProduct)
router.delete('/:id', productController.deleteProduct)

export default router;