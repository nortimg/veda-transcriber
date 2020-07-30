import { IRegisterState, ILoginState, IAuthAction, AuthAction } from "./auth.helpers"
import { IAction } from "../redux.helpers"

export const register = (payload: IRegisterState): IAuthAction<IRegisterState> => ({ type: 'AUTH/REGISTER', payload })

export const login = (payload: ILoginState): IAuthAction<ILoginState> => ({ type: 'AUTH/LOGIN', payload })

export const checkAuthorize = (): IAction<AuthAction> => ({ type: 'AUTH/CHECK_AUTHORIZE' })