import MediaSplit from 'media-split'
import path from 'path'

interface IFragment {
    name: string 
    start: string 
    end: string 
    trackName: string
}

// The section should look like: [01:30 - 03:50] - there is a special function createRange
export async function audioSplitter(inputPath: string, ranges: string) {
    const split = new MediaSplit({
        input: inputPath,
        sections: [ranges],
        output: path.resolve('storage', 'temp')
    })

    return await split.parse()
}