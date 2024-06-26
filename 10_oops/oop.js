const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails:function(){
        // console.log("Got user details from database")
        // console.log(`Username :${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username,logincount,isLoggedIn){
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
}

const userOne =  new User("hitesh",12,true)
const userTwo = new User("ChaiAurCode",11,false)
// console.log(userOne)
// console.log(userTwo.greeting())
console.log(userOne.constructor.toString())


