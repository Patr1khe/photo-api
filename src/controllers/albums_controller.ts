import Debug from 'debug'
// import { debug } from 'console'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'
const debug = Debug('prisma-photo-api:albums_controller')

/**
 * Get all albums
 */
export const index = async ( req: Request, res: Response) => {
    const validationFails = validationResult(req)
    if (!validationFails.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationFails.array(),
        })
    }


    try {
        const album = await prisma.album.findMany()
        res.status(200).send({ status: "success", data: album})
    } catch (err) {
        res.status(500).send({ status: "Error", message: "Something went wrong, double check your server please!"})
    }
}

/**
 * Get a single album include album's photo
 */
export const show = async (req: Request, res: Response) => {
    const validationFails = validationResult(req)
    if (!validationFails.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationFails.array(),
        })
    }

    const albumId = Number(req.params.albumId)

    try {
        const album = await prisma.album.findUniqueOrThrow({
            where: {
                id: albumId,
            },
            include: {
                photos: true,
            }
        })
        res.status(200).send({
            status: "success",
            data: album,
        })
    } catch (err) {
        debug("Error thrown when finding photo with id: %o", req.params.albumId, err)
        return res.status(400).send({status: "error", messages: "Could not find the photo in database" })
    }
}


/**
 * Create a new album
 */
export const store = async (req: Request, res: Response) => {
    const validationFails = validationResult(req)
    if (!validationFails.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationFails.array(),
        })
    }
    
    const {title} = req.body
    debug(req.token)
    
    try {
        const album = await prisma.album.create({
            data: {
                title,
                userId: req.token?.sub
            },
        })
        debug(album)
        res.status(201).send({ status: "success", data: album })
    } catch (err) {
        debug(err)
        return res.status(500).send({ status: "error", message: "Could not create album in database"})
    }
}

