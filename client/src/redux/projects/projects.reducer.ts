import { IProjectsState, IProjectsAction } from "./projects.helpers";
import { IProjectState } from "../project/project.helpers";

const initialState: IProjectsState = {
    list: []
}

export const projectsReducer = (state: IProjectsState = initialState, action: IProjectsAction): IProjectsState => {
    switch (action.type) {
        // Listened by projectsWatcher
        case 'PROJECTS/FETCH_PROJECTS':
            return state

        case 'PROJECTS/SET_PROJECTS': 
            return {
                ...state, 
                list: [...action.payload as IProjectState[]]
            }
        default: return state
    }
}