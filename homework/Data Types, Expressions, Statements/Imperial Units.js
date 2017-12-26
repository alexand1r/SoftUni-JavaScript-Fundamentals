function imperialUnits(input) {
    let foots = Number(input[0]);
    let inches = Math.floor(foots / 12);
    let leftOvers = foots % 12;

    console.log(`${inches}'-${leftOvers}"`);
}

imperialUnits(['55']);