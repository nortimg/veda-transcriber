import { Router, Request, Response } from 'express'
import Transcription from '../models/Transcription'

const router = Router()

type ProjectUploadData = {
    userID: string
    title: string
    description: string
    youtubeURL: string
    file?: File
} | {
    userID: string
    title: string
    description: string
    file: File
    youtubeURL?: string
} | {
    userID: string
    title: string
    description: string
    youtubeURL: string
    file: File
};

// /api/project/upload
router.post('/upload', async (req: Request, res: Response) => {
    try {
        const { title, description, youtubeURL, userID }: ProjectUploadData = req.body
        const { file } = req

        console.log('fields: ', file, title, description, youtubeURL, userID)

        if (!userID) {
            return res.status(403).json({ message: `Can't get userID. Check correctness of your authentication and try again.` })
        }

        

        const transcription = new Transcription({})

        return res.status(201).json({ message: 'Transcription was upload' })
    } catch (e) {
        console.error(`Transcription Route error: ${e}`)
        return res.status(500).json({ message: 'Something went wrong, try again' })
    }
})

export default router