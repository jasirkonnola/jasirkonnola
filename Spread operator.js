let ar1 = [10, 20, 30];

let ar2 = [40, 50, 60];

let ar3 = ar1.concat(ar2);
ar3.push(70);

//using speard operator
let ar3 = [100, ...ar1, ...ar2, 70, 80];

let obj1 = {
    country: "India",
    capital: "New Dehli"
}
let obj2 = {
    language: "Hindi"
}
let obj3 = {
    pops: 20000
}

let obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)
