// for

for(let i=1;i<=10;i++){
    const element = i
    if(element === 5){
        // console.log("5 is best number")
    }
    // console.log(element);
}

debugger
for(let i=0;i<=10;i++){
    // console.log(`Outer loop value: ${i}`)
    for(let j=1;j<=10;j++){
        // console.log(`Inner loop value ${j} and outer loop ${i}`)
        // console.log(`${i} x ${j} = ${i*j}`);
    }
    // console.log()
}

let myArray = ["flash","batman","superman"]

for(let i=0;i<myArray.length;i++){
    // process.stdout.write(myArray.at(i)+" ")
}

// break and continue

// for(let i=1;i<=20;i++){
//     if(i===5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`)
// }

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        // console.log(`Detected 5`);
        continue
    }
    // console.log(`Value of i is ${i}`)
}


