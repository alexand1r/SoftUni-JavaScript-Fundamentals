function captureTheNumbers(input) {
    let numbers = [];
    let regex = /\d+/g;
    // let text = '';
    // for (let i = 0; i < input.length; i++) {
    //     let currentSentence = input[i];
    //     text += currentSentence;
    // }
    // let match = regex.exec(text);
    // while(match) {
    //     numbers.push(match[0]);
    //     match = regex.exec(text);
    // }
    let text = input.join('');
    numbers = text.match(regex);

    console.log(numbers.join(' '));
}

captureTheNumbers(['The300',
    'What is that?',
       'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]);