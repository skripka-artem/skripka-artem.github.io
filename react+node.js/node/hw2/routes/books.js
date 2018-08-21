const express = require("express");
const router = express.Router({mergeParams: true});
const {getBooks, addBooks, deleteBooks, changeBook,  sendBooks} = require("../controllers/books");


router.get("/", getBooks, sendBooks);
router.post("/", addBooks, sendBooks);
router.put("/:title/", changeBook, sendBooks);
router.delete("/:title/", deleteBooks, sendBooks);


module.exports = router;