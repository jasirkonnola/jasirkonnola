// Array Destructuring


let arr1 = ["Kerala","Malayalam",10000, ["TRV","COK","CCJ","CNN"]];

let state = arr1[0];
let language = arr1[1];
let population = arr1[2];

let [state, language, population, [a1, a2, a3, a4]] = arr1;
console.log(state);
console.log(language);
console.log(population);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);


// Object Destructuction

let obj1 = {
    state: "kerala",
    language : "malayalam",
    population : 10000,
    
    airports:{
        a1: "TRV",
        a2: "COK",
        a3: "CCJ",
        a4: "CNN"
    }
}
let {state:s1, language, population, airports:{a1, a2, a3, a4}} = obj1;
let state = obj1.state;
let language = obj1.language;
let population = obj1.population;

console.log(state);
console.log(language);
console.log(population);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

console.log(s1);
