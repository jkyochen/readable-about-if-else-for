
function distributeEpubs(bookId) {
    let epubs = getEpubsByBookId(bookId);
    for (let epub of epubs) {
        distributeEpub(epub);
    }
}

function distributeEpub(epub) {
    if (!epub.isValid()) {
        return;
    }
    let registered = registerIsbn(epub);
    if (!registered) {
        return;
    }
    sendEpub(epub);
}
