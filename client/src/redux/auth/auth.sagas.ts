import { takeEvery, call, select } from 'redux-saga/effects'
import { RegisterAction, IRegisterState, LoginAction, ILoginState } from './auth.helpers'
import { IState } from '../redux.helpers'

const getRegisterData = (state: IState): IRegisterState => state.auth.register
const getLoginData = (state: IState): ILoginState => state.auth.login


export function* authWatcher() {
    yield takeEvery<RegisterAction>('AUTH/REGISTER', registerWorker)
    yield takeEvery<LoginAction>('AUTH/LOGIN', loginWorker)
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
        yield call(() => sendLoginData(loginData))
    } catch (e) {
        console.error(`Login Error: ${e}`)
    }
}

const sendLoginData = async (body: ILoginState) => {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST', body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json'
            }
        })

        return response.json()
    } catch (e) {
        console.error(`Send Login Data Error: ${e}`)
    }
}