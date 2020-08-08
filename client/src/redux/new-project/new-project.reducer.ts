import { INewProjectState, INewProjectAction, NewProjectSources } from "./new-project.helpers";
import { act } from "react-dom/test-utils";

const initialState: INewProjectState = {
    isDialogOpen: false,
    info: {
        description: '',
        title: '',
        sources: {
            youtubeURL: ''
        }
    }
}

export const newProjectReducer = (state: INewProjectState = initialState, action: INewProjectAction): INewProjectState => {
    switch (action.type) {
        case 'NEW_PROJECT/TOGGLE_DIALOG':
            return {
                ...state,
                isDialogOpen: !state.isDialogOpen
            }

        case 'NEW_PROJECT/TEXT_INPUT':
            if (!action.payload?.youtubeURL || !action.payload?.youtubeURL) {
                return {
                    ...state, 
                    info: {
                        ...state.info, 
                        ...action.payload
                    }
                }
            }

            const newState = {
                ...state,
                info: {
                    ...state.info, 
                    sources: {
                        ...state.info.sources,
                        ...(action.payload as NewProjectSources)
                    }
                }
            }

            return newState

        case 'NEW_PROJECT/UPLOAD_FILE': 
            return {
                ...state, 
                info: {
                    ...state.info, 
                    sources: {
                        ...state.info.sources,
                        file: (action.payload as NewProjectSources).file!
                    }
                }
            }
        default:
            return state
    }
}