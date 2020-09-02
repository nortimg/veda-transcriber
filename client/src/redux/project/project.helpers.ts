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
    durationInSeconds: number
}

// TODO: fix types
export type ProjectAction = (
    'PROJECT/GET_PROJECT'
    | 'PROJECT/SET_PROJECT'
)

export interface IProjectAction extends IAction<ProjectAction> {
    payload: IProjectState
} 