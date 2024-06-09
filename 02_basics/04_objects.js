// const tinerUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = {...obj1,...obj2}
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]

// console.log(users.at(-1).email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(users));

// console.log(tinderUser.hasOwnProperty('phone'));

// destructuring

const course = {
    coursename: "js in hindhi",
    price: "999",
    courseInstructor: "hitesh"
}

const { courseInstructor: Instructor } = course
// console.log(Instructor);

// {
//     "name":"hitesh",
//     "coursename":"js in hindhi",
//     "price":"free"
// }

// In JSON key should be in double quotes
// const json = JSON.stringify(course)
// console.log( json);

// console.log(JSON.parse(json));
