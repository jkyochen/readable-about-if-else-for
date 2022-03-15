function getEpubPrice(highQuality, chapterSequence) {
    if (highQuality && chapterSequence > START_CHARGING_SEQUENCE) {
        return 4.99;
    }
    if (sequenceNumber > START_CHARGING_SEQUENCE &&
        sequenceNumber <= FURTHER_CHARGING_SEQUENCE) {
        return 1.99;
    }
    if (sequenceNumber > FURTHER_CHARGING_SEQUENCE) {
        return 2.99;
    }
    return 0.99;
}