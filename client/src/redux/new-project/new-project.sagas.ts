import { takeEvery, select, call } from "redux-saga/effects";
import { NewProjectAction, INewProjectInfo } from "./new-project.helpers";
import { IState } from "../redux.helpers";

const getProjectInfo = (state: IState) => state.newProject.info

export function* newProjectWatcher() {
    yield takeEvery<NewProjectAction>('NEW_PROJECT/CREATE_NEW_PROJECT', createNewProjectWorker)
}

function* createNewProjectWorker() {
    try {
        const newProjectInfo: INewProjectInfo = yield select(getProjectInfo)
        yield call(() => sendNewProjectInfo(newProjectInfo))
    } catch (e) {
        console.error(`Create New Project Worker error: ${e}`)
    }
}

const sendNewProjectInfo = async (body: INewProjectInfo) => {
    try {
        const formData = new FormData()
        formData.append('title', body.title)
        formData.append('description', body.description)

        const { email } = JSON.parse(localStorage.getItem('userData') as string)
        formData.append('email', email)
        
        if (body.sources.youtubeURL) {
            formData.append('youtubeURL', body.sources.youtubeURL)
        }

        if (body.sources.file) {
            formData.append('file', body.sources.file, body.title)
        }

        const response = await fetch('/api/project/create', {
            method: 'POST',
            body: formData
        })

        return await response.json()
    } catch (e) {
        console.error(`Send New Project Info error: ${e}`)
    }
}