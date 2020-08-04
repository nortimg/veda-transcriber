import { IAction } from "../redux.helpers";

export interface IGlobalState {
    isSidebarOpen: boolean
    pageTitle: string
}

export type GlobalAction = 'GLOBAL/TOGGLE_SIDEBAR'

export interface IGlobalAction extends IAction<GlobalAction> {}