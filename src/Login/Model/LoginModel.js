import { postData } from '../../Common/Utils/HttpUtils';

export async function auth(username, password) {
    try {
        const request = {
            "username": username,
            "password": password
        };

        return await postData('https://run.mocky.io/v3/3669c83a-9ba1-4424-b08f-a8ef6d699966', request);
    }
    catch (e) {
        console.log(e);
    }
}