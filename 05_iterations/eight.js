const myNums = [1,2,3,4]

const myTotal = myNums.reduce((acc,cur,index,arr)=>{
    return acc + cur
},0)

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

const totalPrice = shoppingCart.reduce((acc,cur)=>cur.price + acc,0)
console.log(totalPrice)

// console.log(myTotal);

// const reduceFunc = (arr,callback,initialValue)=>{
//     let accumulator = initialValue;
//     arr.forEach((ele,index,arr) => {
//         const res = callback(accumulator,ele,index,arr)
//         accumulator = res
//     });
//     return accumulator
// }

// const res = reduceFunc(myNums, (acc, cur, index, arr) => acc * cur,1)
// console.log(res);

    
