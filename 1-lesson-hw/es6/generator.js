export {getWords};

function cleanStr(str) {
    return str.trim().replace(/ +/g, ' ');
}

function* getWords(str) {
    let words = cleanStr(str).split(' ');
    for (let i = 0; i < words.length; i++) {
        yield words[i]
    }
}

