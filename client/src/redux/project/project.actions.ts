import { IAction } from '../redux.helpers';
import { ProjectAction, IProjectAction, IProjectState } from './project.helpers';

export const getProject = (id: string): IAction<ProjectAction> => ({ type: 'PROJECT/GET_PROJECT', payload: id })

export const setProject = (payload: IProjectState): IProjectAction => ({ type: 'PROJECT/SET_PROJECT', payload })