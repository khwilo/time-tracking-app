export const getTimers = (success) => {
    return fetch('/api/timers', {
        headers: {
            'Accept': 'application/json',
        },
    }).then(checkStatus)
        .then(parseJson)
        .then(success);
}

export const createTimer = (data) => {
    return fetch('/api/timers', {
        method : 'POST',
        headers: {
            'Accept'      : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(checkStatus);
}

export const updateTimer = (data) => {
    return fetch('/api/timers', {
        method : 'PUT',
        headers: {
            'Accept'      : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(checkStatus);
}

export const deleteTimer = (data) => {
    return fetch('/api/timers', {
        method : 'DELETE',
        headers: {
            'Accept'      : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(checkStatus);
}

export const startTimer = (data) => {
    return fetch('/api/timers/start', {
        method : 'POST',
        headers: {
            'Accept'      : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(checkStatus);
}

export const stopTimer = (data) => {
    return fetch('/api/timers/stop', {
        method : 'POST',
        headers: {
            'Accept'      : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(checkStatus);
}

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`Http Error ${response.statusText}`);

        error.status   = response.statusText;
        error.response = response;

        console.log(error);
        throw error;
    }
}

const parseJson = (response) => {
    return response.json();
}
