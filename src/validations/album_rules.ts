import {body} from 'express-validator'

export const createAlbumRules = [
    body('title').isString().withMessage('Has to be a string').isLength({min: 3}).withMessage('has to be atleast 3 chars long').bail(),
]