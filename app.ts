import express from 'express'
import config from 'config'
import mongoose from 'mongoose'

import authRoutes from './routes/auth.routes'

const app = express()

app.use('/api/auth', authRoutes)

const PORT = config.get('port')

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