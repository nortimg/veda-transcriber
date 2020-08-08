import { IAction } from "../redux.helpers";

export enum NewProjectInfoFields {
    TITLE = 'title',
    DESCRIPTION = 'description',
    YOUTUBEURL = 'youtubeURL',
    FILE = 'file'
}

export type NewProjectSources = {
    youtubeURL: string
    file?: File
} | {
    youtubeURL?: string
    file: File
} | {
    youtubeURL: string
    file: File
}

export interface INewProjectInfo {
    title: string
    description: string
    sources: NewProjectSources
}

export interface INewProjectState {
    isDialogOpen: boolean
    info: INewProjectInfo
}

export type NewProjectAction = (
    'NEW_PROJECT/CREATE_NEW_PROJECT'
    | 'NEW_PROJECT/TOGGLE_DIALOG'
    | 'NEW_PROJECT/TEXT_INPUT'
    | 'NEW_PROJECT/UPLOAD_FILE'
)

export interface INewProjectAction extends IAction<NewProjectAction> {
    payload?: {
        [key in NewProjectInfoFields]: string
    } | NewProjectSources
}