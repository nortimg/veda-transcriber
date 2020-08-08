import { TextInputAction, ITextInputAction, ITextInputHandlerPayload } from "./redux.helpers";

export const textInputHandler = (type: TextInputAction, payload: ITextInputHandlerPayload): ITextInputAction => ({ type, payload })