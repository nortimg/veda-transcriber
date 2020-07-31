import { IAction } from "../redux.helpers";

export interface IGlobalState {
    isSidebarOpen: boolean
}

export type GlobalAction = 'GLOBAL/TOGGLE_SIDEBAR'

export interface IGlobalAction extends IAction<GlobalAction> {}