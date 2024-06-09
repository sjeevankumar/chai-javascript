// singleton
// Object.create()

//  object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Hitesh",
    "full name":"Hitesh Choudhary",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    [mySym]:"key1"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// Object.freeze(JsUser)
// JsUser.email = "hiteshh@chatgpt.com"

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
