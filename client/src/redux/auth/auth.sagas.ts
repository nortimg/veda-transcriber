import { takeEvery, call, select, put } from 'redux-saga/effects'

import { IState } from '../redux.helpers'
import {
    IRegisterState,
    ILoginState,
    AuthAction,
    IAuthAction,
    IAuthContextState
} from './auth.helpers'


const getRegisterData = (state: IState): IRegisterState => state.auth.register
const getLoginData = (state: IState): ILoginState => state.auth.login

export function* authWatcher() {
    yield takeEvery<AuthAction>('AUTH/REGISTER', registerWorker)
    yield takeEvery<AuthAction>('AUTH/LOGIN', loginWorker)
}

export function* registerWorker() {
    try {
        const registerData: IRegisterState = yield select(getRegisterData)
        yield call(() => sendRegisterData(registerData))
    } catch (e) {
        console.error(`Register Error: ${e}`)
    }
}

const sendRegisterData = async (body: IRegisterState) => {
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST', body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json'
            }
        })

        return response.json()
    } catch (e) {
        console.error(`Send Register Data Error: ${e}`)
    }
}

export function* loginWorker() {
    try {
        const loginData: ILoginState = yield select(getLoginData)
        const json = yield call(() => sendLoginData(loginData))

        if (json.token) {
            yield put<IAuthAction<IAuthContextState>>({
                type: 'AUTH/LOGIN/SUCCESS',
                payload: json
            })
        }
    } catch (e) {
        console.error(`Login Error: ${e}`)
    }
}

async function sendLoginData(body: ILoginState) {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST', body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        return json
    } catch (e) {
        console.error(`Send Login Data Error: ${e}`)
    }
}