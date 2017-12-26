function sortArray(input) {
    input.sort();
    input.sort((a,b)=>a.length-b.length);
    console.log(input.join('\n'));
}

// sortArray(['test',
//     'Deny',
//     'omen',
//     'Default'
// ]);

sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);