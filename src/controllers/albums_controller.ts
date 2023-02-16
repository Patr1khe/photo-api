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

/**
 * Add a photo to an album
 */
export const addPhoto = async (req: Request, res: Response) => {
    const validationFails = validationResult(req)
    if (!validationFails.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationFails.array(),
        })
    }
 
    const albumId = Number(req.params.albumId)
    debug(req.token)
    
    try {
        const album = await prisma.album.update({
            where: {
                id: albumId,
            },
            data: {
                photos: {
                    connect: {
                        id: req.body.photoId,
                    }
                }
            },
            include: {
                photos: true,
            }
        })
        debug(album)
        res.status(201).send({ status: "success", data: album })
    } catch (err) {
        debug(err)
        return res.status(500).send({ status: "error", message: "Could not create album in database"})
    }
}

/**
 * Add multiple photos to an album
 */
export const addPhotos = async (req: Request, res: Response) => {
    const validationFails = validationResult(req)
    if (!validationFails.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationFails.array(),
        })
    }

    const photoIds = req.body.photoIds.map( (photoId: Number) => {
        return {
            id: photoId,
        }
    })  
 

    const albumId = Number(req.params.albumId)
    debug(req.token)
    
    try {
        const album = await prisma.album.update({
            where: {
                id: albumId,
            },
            data: {
                photos: {
                    connect: photoIds
                }
            },
            include: {
                photos: true,
            }
        })
        debug(album)
        res.status(201).send({ status: "success", data: album })
    } catch (err) {
        debug(err)
        return res.status(500).send({ status: "error", message: "Could not create album in database"})
    }
}



/**
 * Update a existing album
 */
export const updateAlbumId = async (req: Request, res: Response) => {
    // check Errors for any validation
    const validationFails = validationResult(req)
    if (!validationFails.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationFails.array(),
        })
    }
    const albumId = Number(req.params.albumId)

    try {
        const album = await prisma.album.update({
            where: {
                id: albumId,
            },
            data: req.body
        })
        debug(album)
        res.send({ status: "success", data: album})
    } catch (err) {
        debug(err)
        return res.status(500).send({ status: "error", message: "Could not update photo in database"})
    }
}

/**
 * Delete an album inclusve the links to the photos, but not the photos themselves
 */
export const destroy = async (req: Request, res: Response) => {
    // check Errors for any validation
    const validationFails = validationResult(req)
    if (!validationFails.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationFails.array(),
        })
    }

    const albumId = Number(req.params.albumId)

    // verify that the album doesn't have any assoicated photos
    try {
        const album = await prisma.album.findUniqueOrThrow({
            where: {
                id: albumId,
            },
            include: {
                _count: {
                    select: {
                        photos: true,
                    },
                },
            },
        })

        if (album._count.photos) {
            return res.status(400).send({ status: "fail", message: "Album has linked photos" })
        }

    } catch (err) {
        return res.status(404).send({message:"not found"})
    }

    try {
        const deleteAlbum = await prisma.album.delete({
            where: {
                id: albumId
            },
        })
        return res.status(200).send({status: "success", deleteAlbum})
    } catch (err) {
        debug(err)
        return res.status(500).send({ status: "error", message: "Could not delete photo in database"})
    }
}