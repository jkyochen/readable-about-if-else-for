
function distributeEpubs(bookId) {
    let epubs = getEpubsByBookId(bookId);
    for (let epub of epubs) {
        if (epub.isValid()) {
            let registered = registerIsbn(epub);
            if (registered) {
                sendEpub(epub);
            }
        }
    }
}
