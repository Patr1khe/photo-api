import express from 'express'
import { body, validationResult } from 'express-validator'
import { Request, Response } from 'express'
import { index, store, show, updatePhotoId, destroy } from '../controllers/photos_controller'
import { prisma } from '@prisma/client'
import { createPhotoRules } from '../validations/photo_rules'
const router = express.Router()

/**
 * GET /photos
 */
router.get('/', index)

/**
 * GET /photos/:photoId
 */
router.get('/:photoId', show)


/**
 * POST /photos
 */
router.post('/', createPhotoRules, store)

/**
 * PATCH /photos/:photoId
 */
router.patch('/:photoId', updatePhotoId)

/**
 * DELETE /photos/:photoId
 */
router.delete('/:photoId', destroy)


export default router