function quadraticEquation(input) {
    let [a, b, c] = input.map(Number);

    let d = Math.pow(b, 2) - 4 * a * c;

    if (d > 0) {
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(Math.round(x2 * 100000) / 100000);
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        console.log(Math.round(x1 * 100000) / 100000);
    } else if (d == 0) {
        let x = -b / (2 * a);
        console.log(x);
    } else {
        console.log('No');
    }
}