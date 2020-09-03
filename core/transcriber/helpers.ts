export type range = string // '10:10'

export interface ISTTServiceRequestBody {
    range: Buffer
    language: string
}