import MediaSplit from 'media-split'

export function convertSecondsToMinutesAndSeconds(secondsSummary: number): string {
    const secondsInMinute = 60
    let minutes: string | number = Math.floor(secondsSummary / secondsInMinute)

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    let secondsRemained: string | number = secondsSummary % secondsInMinute

    if (secondsRemained < 10) {
        secondsRemained = `0${secondsRemained}`
    }

    return `${minutes}:${secondsRemained}`
}

export function createRange(from: string, to: string) {
    return `[${from} - ${to}]`
}

interface IFragment {
    name: string 
    start: string 
    end: string 
    trackName: string
}

// The section should look like: [01:30 - 03:50] - there is a special function createRange
export async function audioSplitter(path: string, ranges: string) {
    const split = new MediaSplit({
        input: path,
        sections: ranges
    })

    const fragments: IFragment[] = await split.parse()
    fragments.forEach((f) => {
        console.log(f)
    })
}