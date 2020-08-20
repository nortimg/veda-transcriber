import { IProjectsAction } from "./projects.helpers";
import { IProjectState } from "../project/project.helpers";

export const fetchProjects = (): IProjectsAction => ({ type: 'PROJECTS/FETCH_PROJECTS' })
export const pushProjects = (projects: IProjectState): IProjectsAction => ({ type: 'PROJECTS/SET_PROJECTS', payload: projects })