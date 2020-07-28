export type RegisterAction = 'AUTH/REGISTER' 

export interface IAuthState {
    register: IRegisterState
}

export interface IRegisterState {
    nickname: string 
    password: string
    name: string
    email: string
}

export interface IRegisterAction {
    type: RegisterAction
    payload?: IRegisterState
}
