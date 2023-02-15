import express from 'express'
import { index, show, store, } from '../controllers/albums_controller'
import { createAlbumRules } from '../validations/album_rules'

const router = express.Router()

/**
 * GET /albums
 */
router.get('/', index)

/**
 * GET /albums/:albumId
 */
router.get('/:albumId', show)

/**
 * POST /albums
 */
router.post('/', createAlbumRules, store)




export default router