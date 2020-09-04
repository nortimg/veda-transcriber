import { createRange } from '../../utils/time'
import { IAudioFile } from './helpers'
import { runInThisContext } from 'vm'
import { audioSplitter } from '../../utils/audioSplitter'

interface IRange {
    from: string // 'minute:second' ('01:50') 
    to: string
    result: string | null // by default is null
    file: IRangeFileLink
}

interface IRangeFileLink {
    full: { path: string }
    range: { path: string } | null
}

export class AudioRange implements IRange {
    private _from: string
    private _to: string
    private _result: string | null = null
    private _file: IRangeFileLink
    constructor(from: string, to: string, file: IRangeFileLink) {
        this._from = from
        this._to = to
        this._file = file
    }

    set result(result: string | null) {
        if (!this.result) {
            return
        }

        this._result = result
    }

    get result() {
        return this._result
    }

    get from() {
        return this._from
    }

    get to() {
        return this._to
    }

    get file() {
        return this._file
    }

    set rangeFilePath(filePath: string) {
        this.file.range = {
            path: filePath
        }
    }

    // async makeSplit() {
    //     const range = createRange(this.from, this.to)
    //     const split = await audioSplitter(this.file.full.path, range)
    //     return this.rangeFilePath = 
    // }
}