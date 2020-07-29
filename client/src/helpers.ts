import { ITextInputHandlerPayload, IAction, TextInputAction } from "./redux/redux.helpers";

export interface IUseTextInputProps {
    textInputHandler: (type: TextInputAction, payload: ITextInputHandlerPayload) => IAction
}