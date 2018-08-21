const USERS = require("../mock-data/users");
const {merge} = require("lodash");
const slug = require("slug");

module.exports.getBooks = (req, res, next) => {
    const index = req.params.index;
    req.books = USERS[index].books;
    next();
};

module.exports.addBooks = (req, res, next) => {
    const index = req.params.index;
    const book = req.body;
    req.books = USERS[index].books;
    req.books.push(book);
    next();
};

module.exports.sendBooks = (req, res, next) => {
    res.status(200);
    res.json(req.books);
}

module.exports.deleteBooks = (req, res, next) => {
    const index = req.params.index;
    const title = req.params.title;
    req.books = USERS[index].books;
    req.books = req.books.filter(book => slug(book.title) !== title)
    next();
};


module.exports.changeBook = (req, res, next) => {
    const {title, index} = req.params;
    const userBooks = USERS[index].books;
    const book = userBooks.find((bookEx) => {
        return slug(bookEx.title).toLowerCase() === title.toLowerCase();
    });
    merge(book, req.body);
    req.books = book;
    next();
}