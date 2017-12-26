function nowPlaying(input) {
    let [track, name, duration] = input;

    console.log(`Now Playing: ${name} - ${track} [${duration}]`);
}

nowPlaying(['Number One', 'Nelly', '4:09']);