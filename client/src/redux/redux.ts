import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { all } from 'redux-saga/effects'
import { authWatcher } from './auth/auth.sagas'
import { IState } from './redux.helpers'
import { globalReducer } from './global/global.reducer'

export const rootReducer = combineReducers<IState>({
    auth: authReducer,
    global: globalReducer
})

export function* rootSaga() {
    yield all([
        authWatcher()
    ])
}