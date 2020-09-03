import path from 'path'
import fs from 'fs'
import { convertSecondsToMinutesAndSeconds } from './audioSplitter'
import { WitAI } from '../core/transcriber/WitAI'

describe('Tests for convertSecondsToMinutesAndSeconds function', () => {
    it('should be defined', () => {
        expect(convertSecondsToMinutesAndSeconds).toBeDefined()
    })

    it('should return 06:05 minutes:seconds of 365 seconds', () => {
        expect(convertSecondsToMinutesAndSeconds(365)).toBe(`06:05`)
    })
})

describe('Tests for WitAI.transcribe', () => {
    const filePath = path.resolve(__dirname, '../storage/users/devoltybot/3.mp3')
    const transcriberRequest = WitAI.transcribe(filePath, 'RU')

    let result: {
        text: string 
    }

    beforeAll(async () => {
        const testFile = fs.readFileSync(filePath)
        if (!testFile) {
            return fs.writeFileSync(filePath, 'testFile')
        }

        result = await transcriberRequest
        return 
    })

    it('should be defined', () => {
        expect(WitAI.transcribe).toBeDefined()
    })

    it('should be an instance of promise', () => {
        expect(transcriberRequest).toBeInstanceOf(Promise)
    })

    it('should return an object', async () => {
        expect(result).toBeInstanceOf(Object)
    })

    it('should have the text field and it must not be empty', async () => {
        expect(result).toHaveProperty('text')
        expect(result.text.length).toBeGreaterThan(0)
    })
})