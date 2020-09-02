export function getIDfromURL(): string {
    const { href } = window.location
    const params = href.split('/')
    const id = params[params.length - 1]
    const parentOfLastParam = params[params.length - 2]

    if (parentOfLastParam !== 'projects') {
        throw new Error(`You can't get project's id outside the /projects/ path`)
    }

    return id
}