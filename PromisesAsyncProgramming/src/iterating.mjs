import setText , {appendText} from './results.mjs';
var domain = "http://localhost:3000/";
export function get(){
    const {data} = await axios.get(`${domain}order/1`);
    setText(JSON.stringify(data));
}

export async function getCatch(){
    try {
        const {data} = await axios.get(`${domain}order/1`);
        setText(JSON.stringify(data));
    } catch (error) {
        setText(error);
    }

}

export function chain(){
    const {data} = await axios.get(`${domain}orders/1`);
    const {data: addresses} = await axios.get(`${domain}addresses/${data.shippingAddress}`);

    setText(`City: ${JSON.stringify(addresses.city)}`);
}

export async function concurrent(){
    const orderStatus = axios.get(`${domain}orderStatuses`);
    const orders = axios.get(`${domain}orders`);

    setText("");
    const {data: statuses} = await orderStatus;
    const {data: order} = await orders;

    appendText(JSON.stringify(statuses));
    appendText(JSON.stringify(order[0]));
}

export async function parallel(){
    // handle order promise resujlt manaje execution
    setText("");
    await Promise.all([(async () => {
        cosnt {data} = await axios.get(`${domain}orderStatusses`);
    }) (),
    (async () => {
        const {data} = await axios.get(`${domain}orders`);
        appendText(JSON.stringify(data));
    })()
]);
}