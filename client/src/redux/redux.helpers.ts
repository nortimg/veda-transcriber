import { IAuthState } from "./auth/auth.helpers";

export type Action = string

export type TextInputAction = (
    'TEXT_INPUT'
    | 'AUTH/REGISTER/TEXT_INPUT'
    | 'AUTH/LOGIN/TEXT_INPUT'
)

export interface IState {
    auth: IAuthState
}

export interface ITextInputHandlerPayload {
    [name: string]: string
}

export const textInputHandler = (type: TextInputAction, payload: ITextInputHandlerPayload): IAction => ({ type, payload })

export interface ITextInputAction extends IAction {
    type: TextInputAction
    payload: {
        [field: string]: string
    }
}

export interface IAction {
    type: Action
    payload?: IActionPayload
}
export interface IActionPayload { }