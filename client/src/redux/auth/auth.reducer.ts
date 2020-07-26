import { IAction } from "../redux.helpers"

export type RegisterAction = 'AUTH/REGISTER' 

export interface IRegisterState {
    nickname: string 
    password: string
    name: string
    email: string
}

const initialState: IRegisterState = {
    nickname: '',
    password: '',
    name: '',
    email: ''
}

export interface IRegisterAction {
    type: RegisterAction
    payload?: IRegisterState
}



export const authReducer = (state: IRegisterState = initialState, action: IRegisterAction | IAction): IRegisterState => {
    switch (action.type) {
        case 'AUTH/REGISTER': 
            return state
        case 'TEXT_INPUT': 
            return {...state, ...action.payload}
        default: return state
    }
}