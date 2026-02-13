function sum(n1,n2, ...nums) {
    
    let sum = 0;
    for(let x of nums) {
        sum += x;
    }
    console.log(n1+n2+sum);

}

sum( 10, 20, 30, 40, 50);
