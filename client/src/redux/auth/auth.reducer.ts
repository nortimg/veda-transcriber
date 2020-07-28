import { IAction } from "../redux.helpers"
import { IRegisterState, IRegisterAction, IAuthState } from "./auth.helpers"

const initialState: IAuthState = {
    register: {
        nickname: '',
        password: '',
        name: '',
        email: ''
    }
}

export const authReducer = (state: IAuthState = initialState, action: IRegisterAction | IAction): IAuthState => {
    switch (action.type) {
        case 'AUTH/REGISTER':
            return { ...state, ...action.payload as IRegisterState }
        case 'TEXT_INPUT':
            return { ...state, register: { ...state.register, ...action.payload } }
        default: return state
    }
}