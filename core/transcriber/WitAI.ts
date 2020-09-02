import { Transcriber } from './Transcriber';
import { getAudioDurationInSeconds } from 'get-audio-duration'
import { Readable } from 'stream';

const witAPI = 'wit...'

// The wit.ai speech to text recognition
export class WitAI extends Transcriber {
    constructor() {
        super()
    }

    public static transcribe(fileStream: ReadableStream) {
        super.transcribe(fileStream)
    }

    private static async getRanges(fileStream: Readable) {
        const duration = await getAudioDurationInSeconds(fileStream)
        // One range is 10 seconds (wit.ai's limit is 15 sec)
        const rangeDuration = 10
        const rangesCount = duration / rangeDuration

        return new Array<Readable>(rangesCount)
    }

    private static sendRanges(fileStream: Readable) {
        return new Promise(resolve => {
            this.getRanges(fileStream)
                .then(ranges => {
                    return this.registerRanges(ranges)
                })
                .then(registeredRanges => {

                })
        })
    }

    private static registerRanges(ranges: Array<Readable>) {
        // Every range will be a promise
        return ranges.map(r => new Promise(resolve => {
            fetch(witAPI, { method: 'POST', body: 'range!' })
                .then(() => {
                    resolve(r) // TODO: complete the algorythm
                })
        }))
    }
}