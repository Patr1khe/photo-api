import express from "express"
import profile from './profile'
import photos from './photos'
import { register, refresh, login } from '../controllers/user_controller'
import { createUserRules, loginUserRules } from "../validations/user_rules"
import { validateToken } from "../middlewares/auth/jwt"

// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		message: "I AM API, BEEP BOOP",
	})
})

/**
 * /photos
 */
router.use('/photos', validateToken, photos)



/**
 * POST /login
 */
router.use('/login', loginUserRules, login)

/**
 * POST /refresh
 */
router.post('/refresh', refresh)

/**
 * /profile
 */
router.use('/profile', validateToken, profile)

/**
 * /register
 */
router.post('/register', createUserRules, register)

export default router
