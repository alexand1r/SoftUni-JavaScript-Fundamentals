function composeTag(input) {
    let [src, name] = input;
    console.log(`<img src="${src}" alt="${name}">`);
}

composeTag(['smiley', 'face']);