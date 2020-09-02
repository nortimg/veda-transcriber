import { convertSecondsToMinutesAndSeconds } from './audioSplitter'

describe('Tests for convertSecondsToMinutesAndSeconds function', () => {
    it('should be defined', () => {
        expect(convertSecondsToMinutesAndSeconds).toBeDefined()
    })

    it('should return 06:05 minutes:seconds of 365 seconds', () => {
        expect(convertSecondsToMinutesAndSeconds(365)).toBe(`06:05`)
    })
})