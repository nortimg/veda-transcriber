import { Transcriber } from './Transcriber';
import { getAudioDurationInSeconds } from 'get-audio-duration'
import { Readable } from 'stream';
import fs from 'fs';
import axios from 'axios'
import { range, ISTTServiceRequestBody } from './helpers';
import { AudioRange } from './Range';

// The wit.ai speech to text recognition service

interface IWitAITokens {
    [key: string]: string
}

export class WitAI extends Transcriber {
    private static rangeDurationInSeconds = 10
    private static endpointURL = 'https://api.wit.ai/speech'
    private static tokens: IWitAITokens = {
        EN: '3K4KWZ5X64MDO6ZCOXD55KCBQHLC2P6Z',
        RU: 'T27BOAXNS6UV3GCPCJGIJGVJF5PYDBA4'
    }

    constructor() {
        super()
    }

    public static async transcribe(filePath: string, language: string) {
        super.transcribe(filePath, language)
        const duration = await getAudioDurationInSeconds(filePath)
        const aloneRange = duration <= this.rangeDurationInSeconds

        // TODO: Get a language
        if (aloneRange) {
            return new Promise<ISTTServiceRequestBody>((resolve, reject) => {
                fs.readFile(filePath, async (e, buffer) => {
                    if (e) {
                        console.error(`WitAI.transcribe reading file error`)
                        reject(e)
                    }

                    const value = { range: buffer, language: 'RU' }
                    resolve(value)
                })
            })
                .then(async (value) => await this.sendToSTTService(value))
                .catch(e => console.error(`WitAI.trancribe file reading error: ${e}`))
        }
    }

    // This method returns an array, and the size of it is a ranges count
    private static async allocRangesArray(duration: number) {
        const rangesCount = Math.ceil(duration / this.rangeDurationInSeconds)
        return new Array(rangesCount)
    }

    private static async sendToSTTService({ range, language }: ISTTServiceRequestBody) {
        const headers = {
            'Accept': 'audio/x-mpeg-3',
            'Authorization': `Bearer ${this.tokens[language]}`,
            'Content-Type': 'audio/mpeg3',
            'Transfer-Encoding': 'chunked'
        }
        const url = this.endpointURL

        const res = await axios({
            url,
            method: 'POST',
            data: range,
            headers
        })

        return res.data
    }
}