function lastMonth(input) {
    let [day, month, year] = input;
    let date = new Date(year, month-1, 1);
    let wantedDate = new Date(date - 1);
    let wantedDay = wantedDate.getDate();
    console.log(wantedDay);
}

lastMonth(['17','03','2002']);