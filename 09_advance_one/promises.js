const promiseOne = new Promise((resolve, reject) => {
    // Do an async call
    // DB calls, cryptography, network
    setTimeout(() => {
        // console.log('Async task is completed')
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    // console.log("Promise consumed")
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('Async task 2')
        resolve()
    }, 1000)
}).then(() => {
    // console.log('Async 2 resolved')
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
}).then((user) => {
    // console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    let error = true
    if (!error) {
        resolve({ username: "hitesh", password: "123" })
    } else {
        reject('Error:Something went wrong')
    }
})

const username = promiseFour
    .then(user => {
        // console.log(user);
        return user.username
    })
    .then((username) => {
        // console.log(username)
    })
    .catch((error) => {
        // console.log(error)
    }).finally(
    // () => console.log('promise either rejected or resolved')
)

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})

const consumePromise = async () => {
    try {
        const response = await promiseFive
        // console.log(response)
    }catch(error){
        // console.log(error)
    }
    
}
consumePromise()

// const getAllUsers = async()=>{
//     try{
//         const url = "https://jsonplaceholder.typicode.com/users"
//         const response = await fetch(url)
//         console.log(await response.json());
//     }catch(error){
//         console.log("E: ",error)
//     }
    
// }
// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
}).then((data)=>{t
    console.log(data)
})
.catch((error)=>console.log(error))

