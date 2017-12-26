function examResults(input) {
    let examForAveragePoints = input.pop().trim();
    let averagePoints = 0;
    let times = 0;
    let neededPoints = 80;
    for (let line of input) {
        let params = line.split(/\s+/);
        params = params.filter(x => x != '');
        let name = params[0];
        let course = params[1];
        let examPoints = Number(params[2]);
        let courseBonus = Number(params[3]);

        if (course === examForAveragePoints) {
            averagePoints += examPoints;
            times++;
        }

        let coursePoints = examPoints - Math.round((0.8 * examPoints) * 100) / 100;
        coursePoints += courseBonus;
        let grade = 0;
        if (coursePoints >= 80)
            grade = 6;
        else
            grade = ((coursePoints / neededPoints) * 4) + 2;
        grade = grade.toFixed(2);
        if (examPoints >= 100)
            console.log(`${name}: Exam - "${course}"; Points - ${Math.round(coursePoints * 100) / 100}; Grade - ${grade}`);
        else
            console.log(`${name} failed at "${course}"`);
    }
    console.log(`"${examForAveragePoints}" average points -> ${Math.round((averagePoints / times) * 100) / 100}`);
}

// examResults([
//     "Pesho C#-Advanced 100 10",
//     "Gosho Java-Basics 157 3",
//     "Tosho HTML&CSS 317 12",
//     "Minka C#-Advanced 57 15",
//     "Stanka C#-Advanced 157 15",
//     "Kircho C#-Advanced 300 0",
//     "Niki C#-Advanced 400 10",
//     "C#-Advanced"
// ]);

// examResults(['   EDUU    JS-Basics                317          15',
//     'RoYaL        HTML5        121         10',
//     'ApovBerger      OOP   0    10',
//     'Stamat OOP   190 10',
//     'MINKA OOP   230 10',
//     'OOP']);

examResults(["Bankin    HTML&CSS                0          0         ","           RoYaL        HTML5&CSS        340         10        ","       Bi0GaMe      Java   10    10     ","Stamat HQC   190 10","MINKA OOP   230 10","   Java"]);