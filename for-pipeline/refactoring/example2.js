
function distributeEpubs(bookId) {
    getEpubsByBookId(bookId)
        .filter(epub => epub.isValid())
        .filter(epub => registerIsbn(epub))
        .forEach(epub => sendEpub(epub));
}
