import { takeEvery, call, select, put } from 'redux-saga/effects';
import { ProjectAction, IProjectState, IProjectAction } from './project.helpers';
import { IState, IAction, Action } from '../redux.helpers';

export function* projectWatcher() {
    yield takeEvery<IProjectAction>({ type: 'PROJECT/GET_PROJECT' }.type, getProjectWorker)
}

function* getProjectWorker(action: IAction<ProjectAction>) {
    try {
        // get project id from state
        const project = yield call(() => fetchProject(action.payload as string))
        yield put<IProjectAction>({
            type: 'PROJECT/SET_PROJECT', payload: project
        })
    } catch (e) {
        console.error(`Error in getProjectWorker: ${e}`)
    }
}

const fetchProject = async (id: string) => {
    console.log('id: ', id)
    try {
        const response = await fetch(`/api/projects/${id}`)
        const { project } = await response.json()

        return project
    } catch (e) {
        console.error(`Can't fetch project with id: ${id}. See full error: ${e}`)
    }
}