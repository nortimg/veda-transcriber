import { IRegisterAction, IRegisterState } from "./auth.reducer"
import { Action, IAction } from '../redux.helpers'


export const register = (payload: IRegisterState): IRegisterAction => ({ type: 'AUTH/REGISTER', payload })
