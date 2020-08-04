import { INewProjectAction } from "./new-project.helpers";

export const toggleNewProjectDialog = (): INewProjectAction => (
    { type: 'NEW_PROJECT/TOGGLE_DIALOG' }
)