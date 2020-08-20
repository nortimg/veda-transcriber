import { IAction } from "../redux.helpers";
import { IProjectState } from "../project/project.helpers";

export type ProjectsAction = (
    'PROJECTS/FETCH_PROJECTS'
    | 'PROJECTS/SET_PROJECTS'
)

export interface IProjectsState {
    list: IProjectState[]
}

export interface IProjectsAction extends IAction<ProjectsAction> {}