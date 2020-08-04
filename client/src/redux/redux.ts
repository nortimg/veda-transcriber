import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { all } from 'redux-saga/effects'
import { authWatcher } from './auth/auth.sagas'
import { IState } from './redux.helpers'
import { globalReducer } from './global/global.reducer'
import { transcriptionReducer } from './transcription/transcription.reducer'
import { newProjectReducer } from './new-project/new-project.reducer'

export const rootReducer = combineReducers<IState>({
    auth: authReducer,
    global: globalReducer,
    transcription: transcriptionReducer,
    newProject: newProjectReducer
})

export function* rootSaga() {
    yield all([
        authWatcher()
    ])
}