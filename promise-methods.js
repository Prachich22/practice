//promise.all()-->it takes all promise as an input and return a single promise after resolve all iterable promises (this  promise resolves to an array of the results of the input promises).
// Promise.all waits for all fulfillments (or the first rejection).// Promise.all() will reject immediately upon any of the input promises rejecting.
// If an empty iterable is passed, then the promise returned by this method is fulfilled synchronously. The resolved value is an empty array.
// If a nonempty iterable is passed, and all of the promises fulfill, or are not promises, then the promise returned by this method is fulfilled asynchronously.
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });
//o/p-->[ 3, 42, 'foo' ]
////////////
// Promise.all([]).then((values) => {
// console.log(values);
// });
//o/p-->[]
//Promise.allSettled()-->the Promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves after all the input promises have settled, either resolved or rejected.
// const p1 = new Promise((resolve, reject) => {

//     console.log('The first promise has resolved');
//     resolve(10);


// });

// const p2 = new Promise((resolve, reject) => {

//     console.log('The second promise has rejected');
//     reject(20);

// });

// Promise.allSettled([p1, p2])
//     .then((result) => {
//         console.log(result);
//     });
//o/p-->[
//   { status: 'fulfilled', value: 10 },
//   { status: 'rejected', reason: 20 }
// ]
// Promise.any()-->The Promise.any() method accepts a list of Promise objects as an iterable object.If one of the promises in the iterable object is fulfilled, the Promise.any() returns a single promise that resolves to a value which is the result of the fulfilled promise.it ignores the rejected promise.
// const p1 = new Promise((resolve, reject) => {

//     console.log('Promise 1 rejected');
//     reject('error');

// });

// const p2 = new Promise((resolve, reject) => {

//     console.log('Promise 2 fulfilled');
//     resolve(2);

// });
// const v = [p1, p2];
// const p = Promise.any(v)//if there is no provided promise then give Aggregate error
// p.then((value) => {
//     console.log('Returned Promise');
//     console.log(value);
// });
//o/p-->Promise 1 rejected
// Promise 2 fulfilled
// Returned Promise
// 2
// Promise.prototype.catch()-- > The catch() method returns a Promise and deals with rejected cases only.
// const promise1 = new Promise((resolve, reject) => {
//     throw 'catch error';
// });
// promise1.catch((error) => {
//     console.error(error);
// });
//Promise.prototype.finally()-->The finally() method returns a Promise. When the promise is finally either fulfilled or rejected.
// function checkMail() {
//     return new Promise((resolve, reject) => {
//         if (1 > 0.5) {
//             resolve('Mail has arrived');
//         } else {
//             reject(new Error('Failed to arrive'));
//         }
//     });
// }

// checkMail()
//     .then((mail) => {
//         console.log(mail);
//     })
//     .catch((err) => {
//         console.error(err);
//     })
//     .finally(() => {
//         console.log('Experiment completed');
//     });
// Promise.race()-- -> it returns the promise which resolve or reject first;
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
// });
//o/p-->two
//Promise.reject()-->The Promise.reject() method returns a Promise object that is rejected with a given reason.
// function resolved(result) {
//     console.log('Resolved');
// }

// function rejected(result) {
//     console.error(result);
// }

// Promise.reject(new Error('fail')).then(resolved, rejected);
//o/p-->fail
// Promise.resolve()-->The Promise.resolve() method returns a Promise object that is resolved with a given value.
Promise.resolve('Success').then(function (value) {
    console.log(value); // "Success"
}, function (value) {
    // not called
});
//o/p-->success
// Promise.prototype.then()-->The then() method returns a Promise. It takes two arguments: callback functions for the success and failure cases of the Promise.
const promise1 = new Promise((resolve, reject) => {
    resolve('Success!');

});

promise1.then((value) => {
    console.log(value);
    // expected output: "Success!"
});