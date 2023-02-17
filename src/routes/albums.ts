import express from 'express'
import { index, show, store, updateAlbumId, addPhotos,  removePhoto, destroy } from '../controllers/albums_controller'
import { addPhotoRules, createAlbumRules, updatingAlbumRules } from '../validations/album_rules'

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
router.post('/:albumId/photos', addPhotoRules, addPhotos)

/**
 * PATCH /albums/:albumId
 */
router.patch('/:albumId', updatingAlbumRules, updateAlbumId)

/**
 * DELETE /albums/:albumId
 * DELETE /albums/:albumId/photos/:photoId
 */
router.delete('/:albumId', destroy) 
router.delete('/:albumId/photos/:photoId', removePhoto)

export default router