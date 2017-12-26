function medenkaWars(input) {

    let vDamage = 0;
    let nDamage = 0;
    let wCount = 0;
    let dCount = 0;
    let wArray = [];
    let dArray = [];

    for (let i = 0; i < input.length; i++) {

        let line = input[i].split(' ');

        let number = Number(line[0]);
        let side = line[1];

        if (side == 'white') wArray.push(number);
        else if (side == 'dark') dArray.push(number);
    }

    for (let i = 0; i < wArray.length; i++) {
        if (wArray[i-1]) {
            if (wArray[i] == wArray[i - 1]){
                if (wCount == 1) wCount = 0;
                else ++wCount;
            }
        }

        if (wCount == 1) {
            vDamage += wArray[i] * 60 * 2.75;
        } else vDamage += wArray[i] * 60;
    }

    for (let i = 0; i < dArray.length; i++) {
        if (dArray[i-1]) {
            if (dArray[i] == dArray[i - 1])
                if (dCount == 4) dCount = 0;
                else ++dCount;
        }

        if (dCount == 4) {
            nDamage += dArray[i] * 60 * 4.5;
        } else nDamage += dArray[i] * 60;
    }

    let winner = nDamage >= vDamage ? 'Naskor' : 'Vitkor';
    let winnerDamage = nDamage >= vDamage ? nDamage : vDamage;

    console.log('Winner - ' + winner);
    console.log('Damage - ' + winnerDamage);
}

medenkaWars(['1 dark medenkas',
    '1 dark medenkas',
    '1 dark medenkas',
    '1 dark medenkas',
    '1 dark medenkas',
    '1 dark medenkas',
    '1 dark medenkas',
    '1 dark medenkas',
    '1 dark medenkas',
    '1 dark medenkas',
    '1 dark medenkas'
]);