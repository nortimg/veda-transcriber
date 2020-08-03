import path from 'path'
import appRoot from 'app-root-path'
import { ITranscriptionState, ITranscriptionAction } from "./transcription.helpers"


const initialState: ITranscriptionState = {
    id: '1',
    title: 'Title',
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
    versions: [
        { title: 'aaa' },
        { title: 'bbb' }
    ],
    sources: {
        youtube: 'https://www.youtube.com/watch?v=q_wz44x40LI',
        audio: ''
    },
    teacher: {
        id: '1',
        imageURL: 'https://www.sevaashram.com/wp-content/uploads/2020/01/b-r-madhusudan-maharaj-1.jpg',
        name: 'Madhusudan Maharaj'
    }
}

export const transcriptionReducer = (state: ITranscriptionState = initialState, action: ITranscriptionAction) => {
    console.log(path.resolve(appRoot.toString(), 'src'))
    switch (action.type) {
        case 'TRANSCRIPTION':
            return state

        default:
            return state
    }
}