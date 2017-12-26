function ewolksFans(input) {

    let lowestDate = new Date('1900', '1' - 1, '1');
    lowestDate.setDate(lowestDate.getDate() + 1);
    let highestDate = new Date('2015', '1' - 1, '1');
    highestDate.setDate(highestDate.getDate() + 1);
    let fanDate = new Date('1973', '5' - 1, '25');
    fanDate.setDate(fanDate.getDate() + 1);
    let fanArray = [];
    let nonFanArray = [];

    for (let line of input) {
        let pattern = '^([0-9]{2}).([0-9]{2}).([0-9]{4})$';
        let regex = new RegExp(pattern, 'gm');
        let match = regex.exec(line);
        while(match) {
            let day = match[1];
            let month = match[2];
            let year = match[3];
            let date = new Date(year, month - 1, day);
            date.setDate(date.getDate() + 1);

            if (date.getTime() > lowestDate.getTime() && date.getTime() < highestDate.getTime()) {
                //console.log(date);
                if (date.getTime() >= fanDate.getTime()) {
                    date.setDate(date.getDate() - 1);
                    fanArray.push(date);
                } else {
                    date.setDate(date.getDate() - 1);
                    nonFanArray.push(date);
                }
            }

            match = regex.exec(line);
        }
    }
    var maxDate = new Date(Math.max.apply(null,fanArray));
    var minDate=new Date(Math.min.apply(null,nonFanArray));
    if (maxDate != 'Invalid Date')
        console.log('The biggest fan of ewoks was born on ' + maxDate.toDateString());
    if (minDate != 'Invalid Date')
        console.log('The biggest hater of ewoks was born on ' + minDate.toDateString());
    if (maxDate == 'Invalid Date' && minDate == 'Invalid Date') {
        console.log('No result');
    }
}

ewolksFans([
    // '22.03.2014',
    // '01.01.2015',
    // '01.01.1900',
    // '22.03.1700',
    // '01.07.2020',
    // '22.03.2014',
    // '17.05.1933',
    // '10.10.1954'
    //-----
    // '22.03.2000'
    //-----
    // '22.03.1700',
    // '01.07.2020'
    //-----
    '22.03.2014',
    '17.05.1933',
    '10.10.1954'
]);