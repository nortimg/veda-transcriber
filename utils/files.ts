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
    try {
        return fs.existsSync(pathToFileOrDir)
    } catch (e) {
        return console.error(`isExisting error: ${e}`)
    }
}

export async function clearDir(pathToDir: string) {
    try {
        const files = fs.readdirSync(pathToDir)
        if (!files) {
            return 
        }
        
        files.forEach(f => {
            fs.unlinkSync(path.join(pathToDir, f))
        })
    } catch (e) {
        console.error(`Clear dir error: ${e}`)
    }
}

export async function findInTemp(fileName: string) {
    try {
        const filePath = path.resolve('storage', 'temp', fileName)
        return fs.readFileSync(filePath)
    }   catch (e) {
        console.error(`Error during search in the temp directory: ${e}`)
    }
}