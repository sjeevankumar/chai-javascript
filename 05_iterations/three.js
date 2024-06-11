// for of 

// ["","",""]
// [{},{},{}]

debugger
const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num)
}

const greetings = "Hello World!"
for(const char of greetings){
    if(char === " ") continue
    // console.log(char)
}

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
map.set('IN','Lanka')

// console.log(map)

for(const [key,value] of map){
    // console.log(`${key} :- ${value}`);
}

const myObject = {
    game1:'NFS',
    'game1':'Spiderman'
}

// object literals are not iterable by default
// for(const key of myObject){
//     // console.log(key)
// }
