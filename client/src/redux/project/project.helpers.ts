import { IAction } from "../redux.helpers";

interface IProjectVersion {
    title: string

}

export interface IProjectState {
    id: string
    title: string
    text: string
    versions: IProjectVersion[]
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
export type ProjectAction = 'Project'

export interface IProjectAction extends IAction<ProjectAction> {
    payload: IProjectState
} 