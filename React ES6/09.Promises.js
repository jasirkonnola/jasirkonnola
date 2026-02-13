// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"
//                    PENDING -> RESOLVED or REJECTED
//                   new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

/*function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you walk the dog 🐕.");
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you clean the kitchen 🧹.");
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you take out the trash 🗑️.");
        }, 500);
    });
}*/

//method chaining
/*walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You completed the chores..")});*/


//callback hell
/*
walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log("you finished the chores."));
    });
});*/


function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
            if(dogWalked) {
                resolve("you walk the dog 🐕.");
            }
            else {
                reject("you didn't walk the dog 🐕");
            }
        }, 1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = true;
            if(cleanedKitchen) {
                resolve("you clean the kitchen 🧹.");
            }
            else {
                reject("you didn't clean the kitchen🧹");
            }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            trashTakenOut = true;
            if(trashTakenOut) {
                resolve("you take out the trash ♻️️.");
            }
            else {
                reject("you didn't take out the trash ♻️")
            }
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You completed the chores..")})
         .catch(error => console.error(error));
