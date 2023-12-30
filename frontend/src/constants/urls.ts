const baseURL = 'http://localhost:5000'


const bikes = '/bikes'

const urls = {
    bikes: {
        base: bikes,
        byId: (id: string): string => `${bikes}/${id}`,
    }
}

export {
    baseURL,
    urls
}
