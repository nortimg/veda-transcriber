import path from 'path'
import { convertSecondsToMinutesAndSeconds } from './audioSplitter'
import { isExisting, createInitialDirs } from './files'
import { testUserName } from './constants'

describe('Tests for convertSecondsToMinutesAndSeconds function', () => {
    it('should be defined', () => {
        expect(convertSecondsToMinutesAndSeconds).toBeDefined()
    })

    it('should return 06:05 minutes:seconds of 365 seconds', () => {
        expect(convertSecondsToMinutesAndSeconds(365)).toBe(`06:05`)
    })
})

describe('Tests for directories on app initialization', () => {
    const storageDir = path.resolve(__dirname, '../storage')

    const initialStorageDir = {
        users: path.resolve(storageDir, 'users'),
        testAudio: path.resolve(storageDir, `users/${testUserName}/test.mp3`)
    }

    it('isExisting function should be defined and return true', () => {
        expect(isExisting).toBeDefined()
    })

    it('isExisting should return true for initial directories', async () => {
        await createInitialDirs()
        expect(await isExisting(initialStorageDir.users)).toBe(true)
        expect(await isExisting(initialStorageDir.testAudio)).toBe(true)
    })
})