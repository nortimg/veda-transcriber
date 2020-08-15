import { takeEvery, call, select, put } from 'redux-saga/effects'

import { IState, IAction } from '../redux.helpers'
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
    yield takeEvery<AuthAction>('AUTH/CHECK_AUTHORIZE', authorizeWorker)
}

function* registerWorker() {
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
        const json: IAuthContextState = yield call(() => sendLoginData(loginData))

        if (json.token) {
            localStorage.setItem('userData', JSON.stringify(json))
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

        return await response.json()
    } catch (e) {
        console.error(`Send Login Data Error: ${e}`)
    }
}

export function* authorizeWorker() {
    const data = JSON.parse(localStorage.getItem('userData') as string)
    
    // TODO: compare with server's token (security)
    if (data?.token) {
        yield put<IAction<AuthAction>>({ type: 'AUTH/AUTHORIZE' })
    }
}