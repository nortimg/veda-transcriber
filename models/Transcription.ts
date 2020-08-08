import { Document, Schema, model, Types } from 'mongoose'
import { INewProjectInfo } from '../client/src/redux/new-project/new-project.helpers'

export interface ITranscription extends Document, INewProjectInfo {
    text: string
}

const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    text: { type: String, required: true },
    sources: { type: Object, required: true },
    link: { type: String, required: true },
    teacherID: { type: Types.ObjectId, required: true },
    editors: [{ type: Types.ObjectId, ref: 'User' }]
})

export default model<ITranscription>('Transcription', schema)