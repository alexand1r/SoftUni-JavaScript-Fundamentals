function filterMatrix(input) {
    let [num, matrix] = [input.pop().trim(), input.join(' ').split(' ')];
    input = input.map(l => l.split(' '));
    let matches = matrix.map(e => true);

    let counter = 1;
    for (let i = 0; i < matrix.length - 1; i++) {
        let current = matrix[i];
        for (let j = i + 1; j < matrix.length; j++) {
            let next = matrix[j];

            if (current == next) {
                counter++;
                if (counter == num) {
                    for (let k = i; k <= j; k++) {
                        matches[k] = false;
                    }

                    i = j;
                    counter = 1;
                    break;
                }
            } else {
                counter = 1;
                break;
            }
        }
    }

    let results = [];
    let index = 0;
    for (let row = 0; row < input.length; row++) {
        results.push([]);
        for (let col = 0; col < input[row].length; col++) {
            if (matches[index]) {
                results[row].push(matrix[index]);
            }

            index++;
        }
    }

    for (let i = 0; i < results.length; i++) {
        if (results[i].length == 0)
            console.log('(empty)');
        else
            console.log(results[i].join(' '));
    }
}
