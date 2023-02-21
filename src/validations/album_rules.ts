import {body} from 'express-validator'

export const createAlbumRules = [
    body('title').isString().withMessage('Has to be a string').trim().isLength({min: 3}).withMessage('has to be atleast 3 chars long').bail(),
]

export const updatingAlbumRules = [
    body('title').isString().withMessage('Has to be a string').trim().isLength({min: 3}).withMessage('has to be atleast 3 chars long').bail(),
]

export const addPhotoRules = [
    body('photoIds').isArray().notEmpty(),
    body('photoIds.*').isInt().withMessage('Has to be integer').not().isString().withMessage('Can not have string').not().isArray().bail(),
]