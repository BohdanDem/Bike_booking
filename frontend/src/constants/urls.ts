const baseURL = process.env.REACT_APP_API

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
