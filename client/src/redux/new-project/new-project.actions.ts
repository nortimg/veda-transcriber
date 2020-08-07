import { INewProjectAction, INewProjectState } from "./new-project.helpers";

export const toggleNewProjectDialog = (): INewProjectAction => (
    { type: 'NEW_PROJECT/TOGGLE_DIALOG' }
)

export const createProject = (payload: INewProjectState): INewProjectAction => ({ type: 'NEW_PROJECT/CREATE_NEW_PROJECT', payload })
