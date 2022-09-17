import { Router } from 'express'
import { walletsController } from '../controllers'
import { validator } from '../middlewares'
import { walletSchema } from '../validators'

const router = Router()

router.get('/', walletsController.findAll)

router.post('/', validator(walletSchema), walletsController.create)
router.put('/:id', validator(walletSchema), walletsController.update)
router.delete('/:id', walletsController.delete)

export default router