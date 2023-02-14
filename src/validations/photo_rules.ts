import { body } from 'express-validator'

export const createPhotoRules = [
    body('title').isString().withMessage('Has to be a string').isLength({min: 3}).withMessage('has to be atleast 3 chars long').bail(),
    body('url').isString().withMessage('Has to be a string').isURL().withMessage('Must be a url').bail(),
    body('comment').optional().isString().withMessage('has to be a string with any numbers and letters').custom(async (value: string) => {
        const comment = [null, value]
        if (comment) {
            return comment
        }
    }).withMessage('has to be a string').isLength({min:3}).withMessage('Has to be atleast 3 chars long').bail(),
   
]