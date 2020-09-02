import { Transcriber } from './Transcriber';
import { getAudioDurationInSeconds } from 'get-audio-duration'
import { Readable } from 'stream';
import fs from 'fs';
import { range } from './helpers';

const witAPI = 'wit...'

// The wit.ai speech to text recognition
export class WitAI extends Transcriber {
    constructor() {
        super()
    }

    public static async transcribe(filePath: string) {
        super.transcribe(filePath)
        console.log({ filePath })
        const ranges = await this.getRanges(filePath)
        console.log('ranges: ', ranges, ranges.length)
    }

    // const buffer = getBuffer(path)
    // buffer((err, data) => { when buffer will be done })
    private static getBuffer(pathToFragment: string) {
        return (cb: (err: NodeJS.ErrnoException | null, data: Buffer) => void) => (
            fs.readFile(pathToFragment, cb)
        )
    }

    // This method returns an array, and the size of it is a ranges count
    private static async getRanges(filePath: string) {
        const duration = await getAudioDurationInSeconds(filePath)
        // One range is 10 seconds (wit.ai's limit is 15 sec)
        const rangeDuration = 10
        const rangesCount = Math.ceil(duration / rangeDuration)
        return new Array(rangesCount)
    }
}