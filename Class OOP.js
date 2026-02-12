//Classes OOP


class bike {
    
    // constructor method
    constructor(model_name,color,price) {
        this.model_name = model_name;
        this.color = color;
        this.price = price;
    }
    
    // prototype method
    bikeDetails() {
        console.log("bike name : "+this.model_name);
        console.log("bike color: "+this.color);
        console.log("bike price: "+this.price);
    }
    
    // static method
    showPrice() {
        console.log("price of " +this.model_name+" is "+this.price);
    }
    
    static message() {
        console.log("it is a static method");
    }
}

// inheritance
// base class(parent) - bike
// derived class(child) - sportsbike


class sportbike extends bike {
    
}

let b1 = new bike("hero","blk",1000);
let b2 = new bike("shine","blk",9900);
let b3 = new bike("ktm","blk",10000);

b1.bikeDetails();
b2.showPrice();

bike.message();


let sb1 = new sportbike("rc","red",99999);

sb1.bikeDetails();
sb1.showPrice();



