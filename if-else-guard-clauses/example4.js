function getEpubPrice(highQuality, chapterSequence) {
    let price = 0;
    if (highQuality && chapterSequence > START_CHARGING_SEQUENCE) {
        price = 4.99;
    } else if (sequenceNumber > START_CHARGING_SEQUENCE &&
        sequenceNumber <= FURTHER_CHARGING_SEQUENCE) {
        price = 1.99;
    } else if (sequenceNumber > FURTHER_CHARGING_SEQUENCE) {
        price = 2.99;
    } else {
        price = 0.99;
    }
    return price;
}
