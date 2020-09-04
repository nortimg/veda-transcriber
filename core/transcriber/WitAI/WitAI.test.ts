import path from 'path'
import { WitAI } from './WitAI'
import { testUserName } from '../../../utils/constants'

describe('Tests for WitAI.transcribe', () => {
    const filePath = path.resolve(`storage/users/${testUserName}/test.mp3`)
    const transcriberRequest = () => WitAI.transcribe(filePath, 'EN')

    let result: {
        text: string
    }
    beforeAll(async () => {
        result = await transcriberRequest()
    }, 7000)

    it('should be defined', () => {
        expect(WitAI.transcribe).toBeDefined()
    })

    it('should be an instance of Promise', () => {
        expect(transcriberRequest()).toBeInstanceOf(Promise)
    })

    it('should return an object that have a text property', async () => {
        expect(result).toHaveProperty('text')
        expect(result.text.length).toBeGreaterThan(0)
    })
})