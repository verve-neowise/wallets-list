import { Router } from 'express'
import { walletsController } from '../controllers'
import { validator } from '../middlewares'
import { balanceSchema, walletSchema } from '../validators'

const router = Router()

router.get('/', walletsController.findAll)

router.post('/', validator(walletSchema), walletsController.create)
router.put('/:id', validator(walletSchema), walletsController.update)
router.patch('/:id', validator(balanceSchema), walletsController.updateBalance)

router.delete('/:id', walletsController.delete)

export default router