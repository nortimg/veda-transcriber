import { IGlobalState, IGlobalAction } from "./global.helpers";

const initialState: IGlobalState = {
    isSidebarOpen: false,
    pageTitle: ''
}

export const globalReducer = (state: IGlobalState = initialState, action: IGlobalAction): IGlobalState => {
    switch (action.type) {
        case 'GLOBAL/TOGGLE_SIDEBAR': 
            return {
                ...state, 
                isSidebarOpen: !state.isSidebarOpen
            }

        default: return state
    }
}