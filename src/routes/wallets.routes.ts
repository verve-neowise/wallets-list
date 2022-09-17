import { Router } from 'express'

const router = Router()

router.route('/')
    .get()
    .post()
    .put()
    .delete()
    .patch()

export default router