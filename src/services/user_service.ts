/**
 * User Service
 */
import prisma from '../prisma'
import { CreateUserData } from '../types'


/**
 * Create a user
 *
 * @param data User Details
 */
export const createUser = async (data: CreateUserData) => {
	return await prisma.user.create({
		data: data,
	})
}

