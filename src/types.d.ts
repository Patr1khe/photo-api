/**
 * Type Definitions
 */

export type CreateUserData = {
	first_name: string,
    last_name: string,
	email: string,
	password: string,
}

export type JwtPayload = {
	sub: number,
	first_name: string,
    last_name: string,
	email: string,
	iat?: number,
	exp?: number,
}