//handle callback hell using promises (bcz it can give which promise resolve or reject)
let data = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('success')
    } else {
        reject('failed')
    }
});
data.then((message) => {
    console.log("after success promise");
}).catch((message) => {
    console.log('after failure of promise');
});