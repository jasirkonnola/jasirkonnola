//Arrow function

function message(){
    console.log("good morning");
}

message();

//Anonymous function

let fun1 = function() {
    console.log("good morning");
}

fun1();

let fun2 = () => console.log("GM");
fun2();


let sum = (x,y) => console.log(x+y);
sum(10,20);

let number = (num) => {
    if(num>0) {
        console.log("positive number");
    }
    else {
        console.log("negative number");
    }
}

number(10);
number(-10);
