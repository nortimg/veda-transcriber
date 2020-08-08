import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import multer from 'multer'

import authRoutes from './routes/auth.routes'
import transcriptionRoutes from './routes/transcription.routes'

const app = express()

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer(({ storage: storageConfig })).single('file')

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/transcription', upload, transcriptionRoutes)

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch (e) {
        console.error(`Server Error: ${e.message}`)
        process.exit(1)
    }
}

start()