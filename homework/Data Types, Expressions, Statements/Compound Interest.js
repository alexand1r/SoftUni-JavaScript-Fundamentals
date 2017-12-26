function compoundInterest(input) {
    let [p, i, n, t] = input.map(Number);
    i = i / 100;
    n = 12 / n;
    let f = p * (Math.pow(1 + i / n, n * t));

    console.log(f);
}