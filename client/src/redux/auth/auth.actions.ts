import { IRegisterState, ILoginState, IAuthAction, } from "./auth.helpers"

export const register = (payload: IRegisterState): IAuthAction<IRegisterState> => ({ type: 'AUTH/REGISTER', payload })

export const login = (payload: ILoginState): IAuthAction<ILoginState> => ({ type: 'AUTH/LOGIN', payload })