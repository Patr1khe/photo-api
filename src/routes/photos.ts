import express from 'express'
import { body, validationResult } from 'express-validator'
import { Request, Response } from 'express'
import { index, store, show } from '../controllers/photos_controller'
import { prisma } from '@prisma/client'
const router = express.Router()

/**
 * GET /orders
 */
router.get('/', index)

/**
 * GET /photos/:photoId
 */
router.get('/:photoId', show)


/**
 * POST /orders
 */
router.post('/', [
    
], store)




export default router