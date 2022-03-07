
function getBookPrice(user, book) {
    let price = book.getPrice();
    switch (user.getLevel()) {
        case UserLevel.SILVER:
            return price * 0.9;
        case UserLevel.GOLD:
            return price * 0.8;
        case UserLevel.PLATINUM:
            return price * 0.75;
        default:
            return price;
    }
}

function getEpubPrice(user, epub) {
    let price = epub.getPrice();
    switch (user.getLevel()) {
        case UserLevel.SILVER:
            return price * 0.95;
        case UserLevel.GOLD:
            return price * 0.85;
        case UserLevel.PLATINUM:
            return price * 0.8;
        default:
            return price;
    }
}
