export function createEmbedYTVideo(originalUrl: string) {
    const url = originalUrl, stringToRemove = '/watch?v='
    return url.replace(stringToRemove, '/embed/')
}