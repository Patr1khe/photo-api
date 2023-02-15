import express from 'express'
import { addPhoto, addPhotos, index, show, store, updateAlbumId } from '../controllers/albums_controller'
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
 * POST /albums/:albumId/photos
 */
router.post('/', createAlbumRules, store)
router.post('/:albumId/photos', addPhoto)
router.post('/:albumId/photos', addPhotos)

/**
 * PATCH /albums/:albumId
 */
router.patch('/:albumId', updateAlbumId)

export default router