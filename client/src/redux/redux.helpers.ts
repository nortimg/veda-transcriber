import { IAuthState } from "./auth/auth.helpers";

export type Action = 'TEXT_INPUT'

export interface IState {
    auth: IAuthState
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