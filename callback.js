//callback function
function myFirst() {
    console.log("first func")
}

function mySecond(cb) {
    console.log("second func")
}
function myThree(cb) {
    console.log("three func")
}
myThree(mySecond(myFirst()))//nested callback functions (callback hell)


