import { INewProjectAction } from "./new-project.helpers";

export const toggleNewProjectDialog = (): INewProjectAction => (
    { type: 'NEW_PROJECT/TOGGLE_DIALOG' }
)

export const createProject = (): INewProjectAction => ({ type: 'NEW_PROJECT/CREATE_NEW_PROJECT' })

export const uploadFile = (file: File): INewProjectAction => ({ type: 'NEW_PROJECT/UPLOAD_FILE', payload: { file } })