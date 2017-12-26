function cookingByNumbers(input) {
    let n = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        n = op(n, input[i]);
        console.log(n);
    }

    function op(n, operation) {
        switch(operation) {
            case 'chop': return n / 2;
            case 'dice': return Math.sqrt(n);
            case 'spice': return n += 1;
            case 'bake': return n * 3;
            case 'fillet': return n -= n * 0.2;
        }
    }
}