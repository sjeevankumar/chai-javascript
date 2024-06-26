function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log('called')
}

function CreateUser(username,email,password){
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new CreateUser("chai","chai@fb.com","123")
console.log(chai)