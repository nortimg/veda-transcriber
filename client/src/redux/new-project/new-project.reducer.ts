import { INewProjectState, INewProjectAction } from "./new-project.helpers";

const initialState: INewProjectState = {
    isDialogOpen: false
}

export const newProjectReducer = (state: INewProjectState = initialState, action: INewProjectAction): INewProjectState => {
    switch (action.type) {
        case 'NEW_PROJECT/TOGGLE_DIALOG': 
            return {
                ...state, 
                isDialogOpen: !state.isDialogOpen
            }
        default: 
            return state
    }
}