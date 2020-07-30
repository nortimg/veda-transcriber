export type AuthAction = 
    'AUTH/REGISTER' 
    | 'AUTH/LOGIN' 
    | 'AUTH/REGISTER/TEXT_INPUT' 
    | 'AUTH/LOGIN/TEXT_INPUT'
    | 'AUTH/LOGIN/SUCCESS'

export type RegisterStateField = 'nickname' | 'password' | 'name' | 'email'
export type LoginStateField = 'password' | 'email' 

export interface IAuthState {
    register: IRegisterState
    login: ILoginState
    context: IAuthContextState
}

export interface IAuthContextState {
    token: null | string
    userID: null | string 
    isAuthenticated: boolean
}

export interface IRegisterState {
    nickname: string 
    password: string 
    name: string 
    email: string
}

export interface ILoginState {
    email: string
    password: string
}

export interface IAuthAction<P extends IRegisterState | ILoginState | IAuthContextState> {
    type: AuthAction
    payload: P
}