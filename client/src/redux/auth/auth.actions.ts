import { IRegisterAction, IRegisterState, ILoginState, ILoginAction } from "./auth.helpers"

export const register = (payload: IRegisterState): IRegisterAction => ({ type: 'AUTH/REGISTER', payload })

export const login = (payload: ILoginState): ILoginAction => ({ type: 'AUTH/LOGIN', payload })