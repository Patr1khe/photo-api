import { body } from 'express-validator'
import { getUserByEmail } from '../services/user_service'

export const createUserRules = [
    body('first_name').isString().withMessage('Has to be a string').isLength({ min: 3 }).withMessage('Has to have atleast 3 chars long').trim().bail(),
    body('last_name').isString().withMessage('Has to be a string').bail().isLength({ min: 3 }).withMessage('Has to have atleast 3 chars long').trim().bail(),
	body('email').normalizeEmail().isEmail().withMessage('Invaild email!').custom(async (value: string) => {
		// check if a User with that email already exists
		const user = await getUserByEmail(value)

		if (user) {
			// user already exists, throw a hissy-fit
			return Promise.reject("Email already exists")
		}
	}),
	body('password').isString().withMessage('Has to be a string').trim().bail().isLength({ min: 6 }).withMessage("Password can't be less than 6 lengths"),
]

export const loginUserRules = [
    body('email').isEmail().withMessage("It must to be an email!").normalizeEmail().custom(async (value: string) => {
        const user = await getUserByEmail(value)

        if (user) {
            return Promise.resolve("Email already exists")
        }
    }).not().isArray().bail(),
    body('password').isString().withMessage('Has to be a string').trim().bail().isLength({ min: 6 }).withMessage('You need atleast be 6 chars long').bail(),
]