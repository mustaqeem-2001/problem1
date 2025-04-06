function natural_numbers () {
    let total = 0;
    let i = 3;
    while (i < 1000) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        } 
        i++;
    }
    return total;
}
console.log(natural_numbers());