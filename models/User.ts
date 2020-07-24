import { Schema, model, Types, Document } from 'mongoose'
import { ITranscription } from './Transcription'

export interface IUser extends Document {
    email: string
    password: string 
    name: string 
    nickname: string 
    transcriptions: ITranscription[]
}

const schema = new Schema({
    email: { type: String, required: true, unique: true },
    nickname: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    transcriptions: [{ type: Types.ObjectId, ref: 'Transcription' }]
})


export default model<IUser>('User', schema)