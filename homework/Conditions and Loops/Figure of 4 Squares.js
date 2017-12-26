function figureOf4Squares(input) {
    let n = Number(input[0]);

    let squares = '';
    let dashes = '';
    for (let i = 1; i <= n - 2; i++)
        dashes += '-';

    let spaces = dashes.replace(/-/g, ' ');

    for (let row = 1; row <= 2; row++) {
        squares += `+${dashes}+${dashes}+\n`;
        for (let innerRow = 1; innerRow <= Math.floor((n - 3) / 2); innerRow++) {
            squares += `|${spaces}|${spaces}|\n`;
        }
    }
    squares += `+${dashes}+${dashes}+`;

    console.log(squares);
}

figureOf4Squares(['7']);