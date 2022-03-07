
function toParameters(chapters) {
    return chapters
        .filter(chapter => chapter.isApproved())
        .map(chapter => toChapterParameter(chapter));
}
