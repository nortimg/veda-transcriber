import { Router, Request, Response } from 'express'
import Transcription from '../models/Transcription'

const router = Router()

type TranscriptionUploadData = {
    title: string
    description: string
    youtubeURL: string
    file?: File
} | {
    title: string
    description: string
    file: File
    youtubeURL?: string
} | {
    title: string
    description: string
    youtubeURL: string
    file: File
};

// /api/transcription/upload
router.post('/upload', async (req: Request, res: Response) => {
    try {
        const { title, description, youtubeURL }: TranscriptionUploadData = req.body
        const { file } = req

        const transcription = new Transcription({})
    } catch (e) {
        console.error(`Transcription Route error: ${e}`)
        return res.status(500).json({ message: 'Something went wrong, try again' })
    }
})

export default router