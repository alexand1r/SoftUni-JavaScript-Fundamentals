function capitalize(s){
    console.log(s[0].toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } ));
}

// let f = ([text]) => text
//     .split(' ')
//     .map(ch => ch.substr(0, 1).toUpperCase() + ch.substr(1, ch.length).toLocaleLowerCase())
//     .join(' ');

console.log(capitalize('Capitalize these words'));