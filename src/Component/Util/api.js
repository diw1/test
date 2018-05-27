const handleResponse = async function (response) {
    const parsedBody = await response.json()
    if (!response.ok) {
        throw parsedBody
    } else {
        return parsedBody
    }
}

const apiCall = async (url, method, payload) => {

    if (!url.endsWith('/')) {
        url += '/'
    }

    // Fetch options
    const options = { method }

    if (payload)
        payload = JSON.stringify(payload)

    if (payload)
        options.body = payload

    return fetch(url, options).then(handleResponse)
}

export const get = async (url) =>
    apiCall(url, 'GET', null)

export const post = async (url, payload ) =>
    apiCall(url, 'POST', payload )

export const patch = async (url, payload) =>
    apiCall(url, 'PATCH', payload )

export const del = async (url) =>
    apiCall(url, 'DELETE', null )
