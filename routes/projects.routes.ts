import { Router, Request, Response } from 'express';
import Project from '../models/Project';

const router = Router()

// /api/projects
router.get('/', async (req: Request, res: Response) => {
    try {
        // TODO: security
        const projects = await Project.find()
        return res.status(201).json({ message: 'Projects were successfully returned', projects })
    } catch (e) {
        console.error(`Projects Route error: ${e}`)
        return res.status(500).json({ message: 'Something went wrong, try again' })
    }
})

export default router