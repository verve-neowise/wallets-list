import { Router } from "express";

// routes
import wallets from './wallets.routes'

const router = Router()

router.use(wallets)

export default router