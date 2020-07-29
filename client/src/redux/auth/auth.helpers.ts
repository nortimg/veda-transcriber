export type RegisterAction = 'AUTH/REGISTER' 
export type LoginAction = 'AUTH/LOGIN'

export type RegisterStateField = 'nickname' | 'password' | 'name' | 'email' | ''
export type LoginStateField = 'password' | 'email' | ''

export interface IAuthState {
    register: IRegisterState
    login: ILoginState
}

export interface IRegisterState {
    nickname: RegisterStateField 
    password: RegisterStateField
    name: RegisterStateField
    email: RegisterStateField
}

export interface IRegisterAction {
    type: RegisterAction
    payload?: IRegisterState
}

export interface ILoginState {
    email: string
    password: string
}

export interface ILoginAction {
    type: LoginAction
    payload?: ILoginState
}