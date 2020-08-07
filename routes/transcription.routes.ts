import { Router, Request, Response } from 'express'

const router = Router()

router.post('/upload', async (req: Request, res: Response) => {
    try {
        const data = req.body
        console.log(req.body)

        res.status(201).json({ message: 'success' })
    } catch (e) {
        console.error(`Transcription Route error: ${e}`)
    }
})

export default router