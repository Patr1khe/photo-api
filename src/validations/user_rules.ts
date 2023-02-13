import { body } from 'express-validator'
import { getUserByEmail } from '../services/user_service'

export const createUserRules = [
    body('first_name').isString().bail().isLength({ min: 3 }),
    body('last_name').isString().bail().isLength({ min: 3 }),
	body('email').isEmail().custom(async (value: string) => {
		// check if a User with that email already exists
		const user = await getUserByEmail(value)

		if (user) {
			// user already exists, throw a hissy-fit
			return Promise.reject("Email already exists")
		}
	}),
	body('password').isString().bail().isLength({ min: 6 }).withMessage("Password can't be less than 6 lengths"),
]

export const loginUserRules = [
    body('email').isEmail().custom(async (value: string) => {
        const user = await getUserByEmail(value)

        if (user) {
            return Promise.reject("Email already exists")
        }
    }),
    body('password').isString().bail().isLength({ min: 6 }).withMessage('need atleast be 6 chars long').bail(),
]