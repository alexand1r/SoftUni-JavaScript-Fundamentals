function daggersAndSwords(input) {
    $html = '';
    $html += '<table border="1">\n';
    $html += '<thead>\n';
    $html += '<tr><th colspan="3">Blades</th></tr>\n';
    $html += '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n';
    $html += '</thead>\n';
    $html += '<tbody>\n';
    for (let line of input) {
        let length = Math.trunc(Number(line));
        if (length <= 10) {
            continue;
        }
        let type = (length > 40) ? 'sword' : 'dagger';
        let lastDigit = length % 10;
        let application = '';
        switch (lastDigit) {
            case 1:
            case 6:
                application = 'blade';
                break;
            case 2:
            case 7:
                application = 'quite a blade';
                break;
            case 3:
            case 8:
                application = 'pants-scraper';
                break;
            case 4:
            case 9:
                application = 'frog-butcher';
                break;
            case 5:
            case 0:
                application = '*rap-poker';
                break;
        }

        $html += '<tr><td>' + length + '</td><td>' + type + '</td><td>' + application + '</td></tr>\n';
    }
    $html += '</tbody>\n';
    $html += '</table>';

    console.log($html);
}

daggersAndSwords([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '50',
    '126.96541651',
    '3'
]);
