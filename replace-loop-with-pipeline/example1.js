
function toParameters(chapters) {
    let parameters = [];
    for (const chapter of chapters) {
        if (chapter.isApproved()) {
            parameters.add(toChapterParameter(chapter));
        }
    }
    return parameters;
}
