import { IRegisterState } from "./auth/auth.reducer";

export type Action = 'TEXT_INPUT'

export interface IState {
    auth: IRegisterState
}

export interface ITextInputHandlerPayload {
    [name: string]: string 
}

export const textInputHandler = (payload: ITextInputHandlerPayload): IAction => ({ type: 'TEXT_INPUT', payload })

export interface IAction {
    type: Action
    payload?: IActionPayload
}
export interface IActionPayload {}