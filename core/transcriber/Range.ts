interface IRange {
    from: string // 'minute:second' ('01:50') 
    to: string
    result: string | null // by default is null
}

export class AudioRange implements IRange {
    private _from: string
    private _to: string
    private _result: string | null = null
    constructor(from: string, to: string) {
        this._from = from 
        this._to = to
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
}