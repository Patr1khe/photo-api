import {body} from 'express-validator'

export const createAlbumRules = [
    body('title').isString().withMessage('Has to be a string').trim().isLength({min: 3}).withMessage('has to be atleast 3 chars long').bail(),
]

export const updatingAlbumRules = [
    body('title').isString().withMessage('Has to be a string').trim().isLength({min: 3}).withMessage('has to be atleast 3 chars long').bail(),
]

export const addPhotoRules = [
    body('photoId').isInt().withMessage('has to be a integer').trim().bail(),
]