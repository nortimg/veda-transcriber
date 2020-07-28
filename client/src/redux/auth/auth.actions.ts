import { IRegisterAction, IRegisterState } from "./auth.helpers"

export const register = (payload: IRegisterState): IRegisterAction => ({ type: 'AUTH/REGISTER', payload })