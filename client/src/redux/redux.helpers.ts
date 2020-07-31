import { IAuthState } from "./auth/auth.helpers";
import { IGlobalState } from "./global/global.helpers";

export type Action<T> = T

export type TextInputAction = (
    'TEXT_INPUT'
    | 'AUTH/REGISTER/TEXT_INPUT'
    | 'AUTH/LOGIN/TEXT_INPUT'
)

export interface IState {
    auth: IAuthState
    global: IGlobalState
}

export interface ITextInputHandlerPayload {
    [name: string]: string
}

export interface IUseTextInputProps {
    textInputHandler: (type: TextInputAction, payload: ITextInputHandlerPayload) => IAction<TextInputAction>
}

export const textInputHandler = (type: TextInputAction, payload: ITextInputHandlerPayload): ITextInputAction => ({ type, payload })

export interface ITextInputAction extends IAction<TextInputAction> {
    type: TextInputAction
    payload: {
        [field: string]: string
    }
}

export interface IAction<T> {
    type: Action<T>
    payload?: IActionPayload
}
export interface IActionPayload { }