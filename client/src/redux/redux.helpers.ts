import { IAuthState } from "./auth/auth.helpers";
import { IGlobalState } from "./global/global.helpers";
import { IProjectState } from "./project/project.helpers";
import { INewProjectState } from "./new-project/new-project.helpers";

export type Action<T> = T

export type TextInputAction = (
    'TEXT_INPUT'
    | 'AUTH/REGISTER/TEXT_INPUT'
    | 'AUTH/LOGIN/TEXT_INPUT'
    | 'NEW_PROJECT/TEXT_INPUT'
)

export interface IState {
    auth: IAuthState
    global: IGlobalState
    project: IProjectState
    newProject: INewProjectState
}

export interface ITextInputHandlerPayload {
    [name: string]: string
}

export interface IUseTextInputProps {
    textInputHandler: (type: TextInputAction, payload: ITextInputHandlerPayload) => IAction<TextInputAction>
}


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