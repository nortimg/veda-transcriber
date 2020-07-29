import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { all } from 'redux-saga/effects'
import { authWatcher } from './auth/auth.sagas'
import { fork } from 'child_process'

export const rootReducer = combineReducers({
    auth: authReducer
})

export function* rootSaga() {
    yield all([
        authWatcher()
    ])
}