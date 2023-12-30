const baseURL = 'http://localhost:5000'


const bikes = '/bikes'

const urls = {
    bikes: {
        base: bikes,
        byId: (id: number): string => `${bikes}/${id}`,
    }
}

export {
    baseURL,
    urls
}
