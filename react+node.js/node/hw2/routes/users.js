const express = require("express");
const router = express.Router();
const {getUsers, sendUsers, deleteUser, changeUser, addUser} = require("../controllers/users");
const booksRoute = require("./books");

router.get("/", getUsers, sendUsers);
router.post("/", addUser, sendUsers);
router.delete("/:index/", deleteUser ,sendUsers);
router.put("/:index/", changeUser, sendUsers); 

router.use("/:index/books/", booksRoute);

module.exports = router;