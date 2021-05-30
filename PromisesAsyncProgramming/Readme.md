# Promises Async Programming - Traning base project 
- Reporitory https://github.com/taylonr/async-programming-promises.git
- Branches: [ master, consuming-promises, creating promises, iterating ]

| This project runs under a JSON server |

| Home: http://localhost:3000/home|

# Iterating with Async/Await
Async funtion can be used only in a await function

# Training questions:
1. In what cases is possible a Promise fullfills its request by entering to **then** function, but stills returning a status different of 200?
```
axios.get(`${domain}orders/123`)
.then((result) => {
    if(result.status === 200) {
        setText(JSON.stringify(result.data));
    } else {
        // when is possible to enter here?
        setText("Error while retriving request result");
    }
}).catch(error => {
    // Enters when there is an error while doing the promise at all, is this afirmation correct?
    setText(error);
});
```

