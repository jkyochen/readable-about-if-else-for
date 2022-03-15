
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

function getBookPrice(user: IUser, book: Book) {
    let level = user.getUserLevel()
    return level.getBookPrice(book);
}

function getEpubPrice(user: IUser, epub: Epub) {
    let level = user.getUserLevel()
    return level.getEpubPrice(epub);
}

let book: Book = {
    getPrice: () => 1,
}
let epub: Epub = {
    getPrice: () => 2,
}

let regularUser: IUser = {
    getUserLevel: () => {
        return new RegularUserLevel();
    }
}
console.log("RegularUserLevel getPrice", getBookPrice(regularUser, book));
console.log("RegularUserLevel getEpubPrice", getEpubPrice(regularUser, epub));

let goldUser: IUser = {
    getUserLevel: () => {
        return new GoldUserLevel();
    }
}
console.log("RegularUserLevel getPrice", getBookPrice(goldUser, book));
console.log("RegularUserLevel getEpubPrice", getEpubPrice(goldUser, epub));
