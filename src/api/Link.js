import service from "../util/http.js";

let link = (url, method, data, params) => {
    return new Promise(((resolve, reject) => {
        service.request(
            {
                url,
                method,
                data,
                params
            }
        ).then((ok) => {
            resolve(ok);
        }).catch((err) => {
            reject(err);
        })
    }))
}

export default link;