import { body } from 'express-validator'

export const createPhotoRules = [
    body('title').isString().withMessage('Has to be a string').trim().isLength({min: 3}).withMessage('has to be atleast 3 chars long').bail(),
    body('url').isString().withMessage('Has to be a string').trim().isURL().withMessage('Must be a url').bail(),
    body('comment').optional().isString().withMessage('has to be a string with any numbers and letters').trim().isLength({min:3}).withMessage('Has to be atleast 3 chars long').bail(),  
]

export const updatingPhotoRules = [
    body('title').isString().withMessage('Has to be a string').trim().isLength({min: 3}).withMessage('has to be atleast 3 chars long').bail(),
    body('url').isString().withMessage('Has to be a string').trim().isURL().withMessage('Must be a url').bail(),
    body('comment').optional().isString().withMessage('has to be a string with any numbers and letters').trim().isLength({min:3}).withMessage('Has to be atleast 3 chars long').bail(),  
]