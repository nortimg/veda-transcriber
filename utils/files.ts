import path from 'path'
import https from 'https'
import fs, { mkdir } from 'fs'
import { testUserName, testFileURL } from './constants'

export async function createInitialDirs() {
    const testUserDir = path.resolve(__dirname, `../storage/users/${testUserName}`)
    const isDirAlreadyExisting = await isExisting(testUserDir)
    if (isDirAlreadyExisting) {
        return
    }

    return new Promise((resolve, reject) => {
        mkdir(testUserDir, { recursive: true }, (err, path) => {
            if (err) {
                reject(err)
            }

            resolve(path)
        })
    })
        .then(() => {
            return new Promise(resolve => {
                const file = fs.createWriteStream(`${testUserDir}/test.mp3`)
                https.get(testFileURL, response => {
                    resolve(response.pipe(file))
                })
            })
        })
        .catch(err => console.error(`directory making error: ${err}`))
}

export async function isExisting(pathToFileOrDir: string) {
    return fs.existsSync(pathToFileOrDir)
}