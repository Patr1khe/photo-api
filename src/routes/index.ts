import express from "express"
import photos from './photos'
import albums from './albums'
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
 * albums
 */
router.use('/albums', validateToken, albums)


/**
 * POST /login
 */
router.use('/login', loginUserRules, login)

/**
 * POST /refresh
 */
router.post('/refresh', refresh)

/**
 * /register
 */
router.post('/register', createUserRules, register)

export default router
