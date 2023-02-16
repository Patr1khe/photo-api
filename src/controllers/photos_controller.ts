// import { debug } from 'console'
import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'
const debug = Debug('prisma-photo-api:photos_controller')

/**
 * Get all photos
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
        const photos = await prisma.photo.findMany({
            where: {
                userId: req.token?.sub,
            }
        })
        res.status(200).send({ status: "success", data: photos})
    } catch (err) {
        res.status(500).send({ status: "Error", message: "Something went wrong, double check your server please!"})
    }
}

/**
 * Get a single photo
 */
export const show = async (req: Request, res: Response) => {
    const validationFails = validationResult(req)
    if (!validationFails.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationFails.array(),
        })
    }
    const photoId = Number(req.params.photoId)

    try {
        const photo = await prisma.photo.findFirstOrThrow({
            where: {
                id: photoId,
                userId: req.token?.sub,
            }
        })
        res.status(200).send({
            status: "success",
            data: photo,
        })
    } catch (err) {
        debug("Error thrown when finding photo with id: %o", req.params.photoId, err)
        return res.status(400).send({status: "error", messages: "Could not find the photo in database" })
    }
}

/**
 * Create a new photo
 */
export const store = async (req: Request, res: Response) => {
    const validationFails = validationResult(req)
    if (!validationFails.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationFails.array(),
        })
    }
    
    const {title, url, comment} = req.body
    debug(req.token)
    
    try {
        const photo = await prisma.photo.create({
            data: {
                title,
                url,
                comment,
                userId: req.token!.sub
            },
        })
        debug(photo)
        res.status(201).send({ status: "success", data: photo })
    } catch (err) {
        debug(err)
        return res.status(500).send({ status: "error", message: "Could not create photo in database"})
    }
}

/**
 * Update a existing photo
 */
export const updatePhotoId = async (req: Request, res: Response) => {
    // check Errors for any validation
    const validationFails = validationResult(req)
    if (!validationFails.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationFails.array(),
        })
    }
    const photoId = Number(req.params.photoId)

    try {
        const updateData = await prisma.photo.update({
            where: {
                id: photoId,
            },
            data: req.body
        })
        debug(updateData)
        res.status(200).send({ status: "success", data: updateData})
    } catch (err) {
        debug(err)
        return res.status(500).send({ status: "error", message: "Could not update photo in database"})
    }
}

/**
 * Delete a photo
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

    const photoId = Number(req.params.photoId)

    // verify that the photo doesn't have any assoicated albums
    try {
        const photo = await prisma.photo.findUniqueOrThrow({
            where: {
                id: photoId,
            },
            include: {
                _count: {
                    select: {
                        albums: true,
                    },
                },
            },
        })

        if (photo._count.albums) {
            return res.status(400).send({ status: "fail", message: "Photo has linked albums" })
        }

    } catch (err) {
        return res.status(404).send({message:"not found"})
    }

    try {
        const removePhoto = await prisma.photo.delete({
            where: {
                id: photoId
            },
        })
        return res.status(200).send({status: "success", removePhoto})
    } catch (err) {
        debug(err)
        return res.status(500).send({ status: "error", message: "Could not delete photo in database"})
    }
}