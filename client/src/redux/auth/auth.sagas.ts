import { takeEvery, put, call, select } from 'redux-saga/effects'
import { RegisterAction, IRegisterState } from './auth.helpers'
import { IState } from '../redux.helpers'

const getRegisterData = (state: IState): IRegisterState => state.auth.register

export function* registerWatcher() {
    yield takeEvery<RegisterAction>('AUTH/REGISTER', registerWorker)
}

export function* registerWorker() {
    try {
        const registerData: IRegisterState = yield select(getRegisterData)
        yield call(() => sendRegisterData(registerData))
    } catch (e) {
        console.error(`Register Error: ${e}`)
    }
}

async function sendRegisterData(body: IRegisterState) {
    const response = await fetch('/api/auth/register', {
        method: "POST", body: JSON.stringify(body), headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}