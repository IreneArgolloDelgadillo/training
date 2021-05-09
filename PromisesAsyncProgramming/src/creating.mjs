import setText, { appendText } from "./results.mjs";

export function timeout(){
    const wait = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Timeout");
        }, 1500);
    });
    wait.then(text => {setText(text)});
}

export function interval(){
    let counter = 0;
    const wait = new Promise((resolve) => {
        setInterval(() => {
            console.log("Interval");
            counter += 1;
            resolve(`Timeout ${counter}`);
        }, 1500);
    });
    wait.then(text => {
        setText(text);
    })
    .finally(() => {
        appendText(` -- Done ${counter}`);
    });
}

export function clearIntervalChain(){
    let interval;
    let counter = 0;
    const wait = new Promise((resolve) => {
        interval = setInterval(() => {
            console.log("Interval");
            counter += 1;
            resolve(`Timeout ${counter}`);
        }, 1500);
    });
    wait.then(text => {
        setText(text);
    })
    .finally(() => {
        clearInterval(interval);// this will clear the interval funcion and then the interval will not execute again after this
        // appendText(` -- Done ${counter}`);
    });
}


export function xhr(){
    let request = new Promise((resolve, reject) => {
        let xhr = XMLHttpRequest();
        xhr.open("GET", `http://localhost:3000/users/7`);
        xhr.onload = () => {
            if(xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.onerror = () => reject("Request Failed");
        xhr.send();
    });

    request
    .then(result => setText(result))
    .catch(reason => setText(reason));
}
var domain = "http://localhost:3000/";
export function allPromises(){
    let categories = axios.get(`${domain}itemCategories`);
    let statuses = axios.get(`${domain}orderStatuses`);
    let userTypes = axios.get(`${domain}userTypes`);
    let addressTypes = axios.get(`${domain}addressTypes`);

    Promise.all([categories, statuses, userTypes, addressTypes])
    .then(([cat, stat, type, address]) => {
        setText("");
        appendText(JSON.stringify(cat.data));
        appendText(JSON.stringify(stat.data));
        appendText(JSON.stringify(type.data));
        appendText(JSON.stringify(address.data));
    })
    .catch(error => {
        // In case of any promise object is failed event thoght other doesn't. It will enter to this rejected status anyways
        setText(error)
    });
}

export function allSettled(){
    let categories = axios.get(`${domain}itemCategories`);
    let statuses = axios.get(`${domain}orderStatuses`);
    let userTypes = axios.get(`${domain}userTypes`);
    let addressTypes = axios.get(`${domain}addressTypes`);

    Promise.allSettled([categories, statuses, userTypes, addressTypes])
    .then((values) => {
        let results = values.map( v => {
            if(v.status === 'fulfilled') {
                return `FULLFILLED: ${JSON.stringify(v.value.data[0])}`;
            }
            return `REJECTED: ${v.reason.message} `;
        });
        setText(results);
    })
    .catch(reasons => {
        setText(reasons);
    });
}

export function race(){
    let users = axios.get(`${domain}users`);
    let backup = axios.get(`http://localhost:3001/users`);
    // race stops when first promise settles, if the settle is a reject, it will call to catch and you wont get you data
    Promise.race([backup, users])
    .then(users => setText(JSON.stringify(users)))
    .catch(reason => setText(reason));
}