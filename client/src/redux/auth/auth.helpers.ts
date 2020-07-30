export type AuthAction = 'AUTH/REGISTER' | 'AUTH/LOGIN' | 'AUTH/REGISTER/TEXT_INPUT' | 'AUTH/LOGIN/TEXT_INPUT'

export type RegisterStateField = 'nickname' | 'password' | 'name' | 'email'
export type LoginStateField = 'password' | 'email' 

export interface IAuthState {
    register: IRegisterState
    login: ILoginState
}

export interface IRegisterState {
    nickname: string 
    password: string 
    name: string 
    email: string
}

export interface IRegisterAction {
    type: AuthAction
    payload: IRegisterState
}

export interface ILoginState {
    email: string
    password: string
}

export interface ILoginAction {
    type: AuthAction
    payload: ILoginState
}