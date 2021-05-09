import setText, {appendText, showWaiting, hideWaiting} from "./results.mjs";
var domain = "http://localhost:3000/";

export function get() {
    axios.get(`${domain}orders/1`)
    .then(({data}) => {
        setText(JSON.stringify(data));
    });
}

export function getCatch() {
    axios.get(`${domain}orders/123`)
    .then((result) => {
        if(result.status === 200) {
            setText(JSON.stringify(result.data));
        } else {
            // I could enters here, when the request executed but whitout 200 result status
            setText("Error while retriving request result");
        }
    }).catch(error => {
        // Enters when there is an error whle doing the promise at all
        setText(error);
    });
}

export function chain() {
    axios.get(`${domain}orders/1`)
    .then(({data}) => {
        return axios.get(`${domain}addresses/${data.shippingAddress}`);
    })
    .then(({data}) => {
        setText(JSON.stringify(data));
    });
}

export function chainCatch() {
    axios.get(`${domain}orders/1`)
    .then(({data}) => {
        return axios.get(`${domain}addresses/${data.shippingAddress}`);
    })
    .then(({data}) => {
        setText(`City: ${data.my.city}`);
    })
    .catch((error) => {
        setText(error);
    });
}

export function final() {
    showWaiting();
    axios.get(`${domain}orders/1`)
    .then(({data}) => {
        return axios.get(`${domain}addresses/${data.shippingAddress}`);
    })
    .then(({data}) => {
        setText(`City: ${data.city}`);
    })
    .catch((error) => {
        setText(error);
    })
    .finally(() => { // Order to deplair this function, could alter final result
        setTimeout(() => {
            hideWaiting();
        }, 1500);
    });
}