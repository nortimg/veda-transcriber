import {
    IRegisterState,
    IAuthState,
    ILoginState,
    RegisterStateField,
    LoginStateField,
    IAuthAction,
    IAuthContextState
} from "./auth.helpers"

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
    },
    context: {
        isAuthenticated: false,
        token: null,
        userID: null
    }
}

export const authReducer = (
    state: IAuthState = initialState,
    action: IAuthAction<IRegisterState | ILoginState | IAuthContextState>
): IAuthState => {
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
                    [field]: (action.payload as IRegisterState)[field]
                }
            }
        }
        case 'AUTH/LOGIN/TEXT_INPUT': {
            const field: LoginStateField = Object.keys(action.payload)[0] as LoginStateField
            return {
                ...state,
                login: {
                    ...state.login,
                    [field]: (action.payload as ILoginState)[field]
                }
            }
        }
        case 'AUTH/LOGIN/SUCCESS':
            return {
                ...state,
                context: {
                    ...(action.payload as IAuthContextState),
                    isAuthenticated: true,
                }
            }
        case 'AUTH/AUTHORIZE': 
            return {
                ...state, 
                context: {
                    ...state.context, 
                    isAuthenticated: true
                }
            }
        default: return state
    }
}