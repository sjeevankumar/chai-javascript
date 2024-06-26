// Math.PI = '12'
// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true
}
chai.name = 'hello'
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
chai.name='changed'
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
