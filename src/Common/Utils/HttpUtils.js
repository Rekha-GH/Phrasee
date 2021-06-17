import axios from 'axios';

function getServerConfig() {
    return {
        headers: {
            'Content-Type': 'application/json'
        }
    }
}

export async function getData(url) {
    try {
        const config = getServerConfig();
        const response = await axios.get(url, config);

        return response.data;
    }
    catch (e) {
        checkError(e);
    }
}

export async function postData(url, data) {
    try {
        const config = getServerConfig();
        const response = await axios.post(url, data, config);

        return response.data;
    }
    catch (e) {
        checkError(e);
    }
}

export async function deleteData(url) {
    try {
        const config = getServerConfig();
        const response = await axios.delete(url, config);

        return response.data;
    }
    catch (e) {
        checkError(e);
    }
}

function checkError(e) {
    if (e.response && e.response.data && e.response.data.message) {
        throw new Error(e.response.data.message);
    }
    else {
        throw e;
    }
}