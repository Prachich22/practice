//in promise there are several then catch so to overcome this problem use async-await
// async makes a function always return a Promise
// await makes a function wait for a Promise
//to overcome the promise problem then catch again and again we use async await
async function harry() {//bcz off async now return a promise
    console.log("inside harry func")
    const res = await fetch('https://api.github.com/users')
    console.log('before response');
    const users = await res.json();
    console.log('user resolved');
    return users;
    // return "harry"
}
console.log("before calling harry");
const a = harry();
console.log("after calling harry");
console.log(a)//o/p-->Promise {'harry'}
a.then((data) => { console.log(data) })
console.log("last calling harry");
//o/p-->before calling harry
// inside harry func
// after calling harry
// Promise { pending }
// last calling harry
// before responsrese
// user resolved
//data from fetch api




