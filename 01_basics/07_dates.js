// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getFullYear());
// console.log(myDate.getTime());

// console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(myTimeStamp/1000); // in seconds

let newDate = new Date()
// console.log(newDate.getMonth()+1); 
console.log(newDate.toLocaleString('default',{
    weekday:'short',
    hour:'numeric'
}))