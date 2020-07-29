import { IAction, TextInputAction, ITextInputAction } from "../redux.helpers"
import { IRegisterState, IRegisterAction, IAuthState, ILoginAction, ILoginState, RegisterStateField, LoginStateField } from "./auth.helpers"

const initialState: IAuthState = {
    register: {
        nickname: '',
        password: '',
        name: '',
        email: ''
    },
    login: {
        email: '',
        password: ''
    }
}

export const authReducer = (state: IAuthState = initialState, action: IRegisterAction | ILoginAction | ITextInputAction): IAuthState => {
    switch (action.type) {
        case 'AUTH/REGISTER':
            return {
                ...state, register: { ...action.payload as IRegisterState }
            }
        case 'AUTH/LOGIN':
            return { ...state, login: { ...action.payload as ILoginState } }
        case 'AUTH/REGISTER/TEXT_INPUT': {
            const field: RegisterStateField = Object.keys(action.payload)[0] as RegisterStateField
            return {
                ...state,
                register: {
                    ...state.register,
                    [field]: action.payload[field]
                }
            }
        }
        case 'AUTH/LOGIN/TEXT_INPUT': {
            const field: LoginStateField = Object.keys(action.payload)[0] as LoginStateField
            return {
                ...state,
                login: {
                    ...state.login,
                    [field]: action.payload[field]
                }
            }
        }
        default: return state
    }
}