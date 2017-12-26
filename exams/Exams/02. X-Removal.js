function xRemoval(input) {
    let text = input.join(' ').split(' ');
    let matrix = [];
    let fixedMatrix = [];

    for(let line of text) {
        line = line.toLowerCase().split('');
        matrix.push(line);
    }
    // console.log(matrix);

    for(let line of text) {
        line = line.split('');
        fixedMatrix.push(line);
    }

    for (let row = 1; row < matrix.length - 1; row++) {
        for (let col = 1; col < matrix[row].length; col++) {
            let currentCell = matrix[row][col];
            if (matrix[row-1][col-1] == currentCell
                && matrix[row-1][col+1] == currentCell
                && matrix[row+1][col-1] == currentCell
                && matrix[row+1][col+1] == currentCell) {
                    fixedMatrix[row][col] = ' ';
                    fixedMatrix[row-1][col-1] = ' ';
                    fixedMatrix[row-1][col+1] = ' ';
                    fixedMatrix[row+1][col-1] = ' ';
                    fixedMatrix[row+1][col+1] = ' ';
            }
        }
    }
    let result = [];
    for (let arr of fixedMatrix) {
        arr = arr.filter(function (n) {
            return n != ' '
        });
        result.push(arr);
    }
    for(let line of result) {
        let str = '';
        for(let letter of line) {
            str += letter;
        }
        console.log(str);
    }
}

xRemoval([
    // 'abnbjs',
    // 'xoBab',
    // 'Abmbh',
    // 'aabab',
    // 'ababvvvv'
    // '8888888',
    // '08*8*80',
    // '808*888',
    // '0**8*8?'
    // '^u^',
    // 'j^l^a',
    // '^w^WoWl',
    // 'adw1w6',
    // '(WdWoWgPoop)'
    'puoUdai',
    'miU',
    'ausupirina',
    '8n8i8',
    'm8o8a',
    '8l8o860',
    'M8i8',
    '8e8!8?!'
]);