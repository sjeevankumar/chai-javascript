const userEmail = []

if(userEmail){
    console.log("got user email")
}else{
    console.log("don't have user email")
}

// falsy values - false, 0,-0,0n "", undefined, null, NaN
// truthy values - "0","false"," ",[],{}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??) : null or undefined
let val1
val1 = null ?? "Guest"
// console.log(val1);

// ternary operator
// condition ? true : false

const iceTeaPrice = 10
iceTeaPrice >= 80 ? console.log("too costly") : console.log("its is cheap")