import { IAction } from "../redux.helpers";

export interface INewProjectState {
    isDialogOpen: boolean
}

export type NewProjectAction = 'NEW_PROJECT/CREATE_NEW_PROJECT' | 'NEW_PROJECT/TOGGLE_DIALOG'

export interface INewProjectAction extends IAction<NewProjectAction> {
}