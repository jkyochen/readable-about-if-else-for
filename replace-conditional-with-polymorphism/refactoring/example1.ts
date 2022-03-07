
enum UserLevel {
    Regular,
    SILVER,
    GOLD,
    PLATINUM,
}

interface IUser {
    getUserLevel: () => IUserLevel
}

interface IBook {
    getPrice: () => number
}
interface Book extends IBook {
}
interface Epub extends IBook {
}

interface IUserLevel {
    getBookPrice: (book: Book) => number
    getEpubPrice: (epub: Epub) => number
}

class RegularUserLevel implements IUserLevel {
    getBookPrice(book: Book) {
        return book.getPrice();
    }
    getEpubPrice(epub: Epub) {
        return epub.getPrice();
    }
}
class SilverUserLevel implements IUserLevel {
    getBookPrice(book: Book) {
        return book.getPrice() * 0.9;
    }
    getEpubPrice(epub: Epub) {
        return epub.getPrice() * 0.85;
    }
}
class GoldUserLevel implements IUserLevel {
    getBookPrice(book: Book) {
        return book.getPrice() * 0.8;
    }
    getEpubPrice(epub: Epub) {
        return epub.getPrice() * 0.85;
    }
}
class PlatinumUserLevel implements IUserLevel {
    getBookPrice(book: Book) {
        return book.getPrice() * 0.75;
    }
    getEpubPrice(epub: Epub) {
        return epub.getPrice() * 0.8;
    }
}

function getPrice(user: IUser, book: Book) {
    let level = user.getUserLevel()
    return level.getBookPrice(book);
}

function getEpubPrice(user: IUser, epub: Epub) {
    let level = user.getUserLevel()
    return level.getEpubPrice(epub);
}
