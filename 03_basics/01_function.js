function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    // console.log("Hitesh"); unreachable code detected
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username="guest"){
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(...items){
    return items
}

// console.log(calculateCartPrice(200,400,500))

const user = {
    username:"hitesh",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username:"sam",
//     price:399
// })

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 400, 100, 600]))