import { takeEvery, call, put } from "redux-saga/effects";
import { ProjectsAction, IProjectsAction } from "./projects.helpers";

export function* projectsWatcher() {
    yield takeEvery<ProjectsAction>('PROJECTS/FETCH_PROJECTS', fetchProjectsWorker)
}

function* fetchProjectsWorker() {
    try {
        const { projects } = yield call(fetchProjects)
        yield put<IProjectsAction>({ type: 'PROJECTS/SET_PROJECTS', payload: projects })
    } catch (e) {
        console.error(`Fetch Projects Worker Error: ${e}`)
    }
}

// TODO: refactoring - make namespaces for every of redux's folder
// (fetchProjects has already been declared in projects.actions.ts) 
const fetchProjects = async () => {
    try {
        const result = await fetch('/api/projects')
        return await result.json()
    } catch (e) {
        console.error(`Fetch Projects error: ${e}`)
    }
}