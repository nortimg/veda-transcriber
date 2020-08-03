import { IAction } from "../redux.helpers";

interface ITranscriptionVersion {
    title: string

}

export interface ITranscriptionState {
    id: string
    title: string
    text: string
    versions: ITranscriptionVersion[]
    sources: {
        youtube?: string
        audio: string
    }
    teacher: {
        id: string
        imageURL: string
        name: string
    }
}

// TODO: fix types
export type TranscriptionAction = 'TRANSCRIPTION'

export interface ITranscriptionAction extends IAction<TranscriptionAction> {
    payload: ITranscriptionState
} 