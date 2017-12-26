function spyMaster(input) {
    let specialKeyPattern = /\s*([a-zA-Z]+)/;

    let firstLine = input.shift();
    let match = firstLine.match(specialKeyPattern);
    if (match) {
        let specialKey = match[0].trim();

        for (let line of input) {
            let reg = new RegExp('( ' + specialKey + '|' + specialKey + ')', 'gi');
            let regMatch = reg.exec(line);
            while(regMatch) {
                let sk = regMatch[0].trim();
                // console.log(sk);
                let regMsg = new RegExp('( ' + sk + '|' + sk + ')\\s+([!%$#A-Z]{8,})(?:$|\\s|\\.|\\,)','g');
                let msgMatch = regMsg.exec(line);
                if(msgMatch) {
                    // console.log(msgMatch[0]);
                    let msg = msgMatch[2]
                        .replace(/!/g, '1')
                        .replace(/%/g, '2')
                        .replace(/#/g, '3')
                        .replace(/\$/g, '4')
                        .trim()
                        .toLowerCase();

                    // console.log(msg);
                    line = line.replace(msgMatch[2], msg);
                    // console.log(line);
                }

                regMatch = reg.exec(line);
            }
            console.log(line);
        }
    }
}

spyMaster([
    '?specialKey',
    'In this text the specialKey   HELL$%!#OWORLD! is correct, but',
    'the following specialKey   $HELLOWOR#D and specialKey $HELLOWOR#D are not, while',
    'SpeCIaLkeY   SOM%%ET#H$IN and SPECIALKEY ##$$##$$ are!'
]);

// spyMaster([
//     'enCode',
//     'Some messages are just not encoded what can you do?',
//     'RE - ENCODE THEMNOW! - he said.',
//     'Damn encode, ITSALLHETHINKSABOUT, eNcoDe   BULL$#!%']
// );