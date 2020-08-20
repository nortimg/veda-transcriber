import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { all } from 'redux-saga/effects'
import { authWatcher } from './auth/auth.sagas'
import { IState } from './redux.helpers'
import { globalReducer } from './global/global.reducer'
import { projectReducer } from './project/project.reducer'
import { newProjectReducer } from './new-project/new-project.reducer'
import { newProjectWatcher } from './new-project/new-project.sagas'
import { projectsReducer } from './projects/projects.reducer'
import { projectsWatcher } from './projects/projects.sagas'

export const rootReducer = combineReducers<IState>({
    auth: authReducer,
    global: globalReducer,
    projects: projectsReducer,
    project: projectReducer,
    newProject: newProjectReducer
})

export function* rootSaga() {
    yield all([
        authWatcher(),
        projectsWatcher(),
        newProjectWatcher()
    ])
}