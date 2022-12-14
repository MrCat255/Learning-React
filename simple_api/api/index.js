const router = require("express").Router();
const { genres, books, reviews, users } = require("./mock");
const { reply, getById } = require("./utils");

router.get("/genres", (req, res, next) => {
  reply(res, genres);
});

router.get("/books", (req, res, next) => {
  const { genreId: genreId, bookId: bookId } = req.query;
  let result = books;

  if (genreId) {
    const genre = getById(genres)(genreId);
    if (genre) {
      result = genre.books.map(getById(result));
    }
  }

  if (!genreId && bookId) {
    result = getById(result)(bookId);
  }
  reply(res, result);
});

router.get("/reviews", (req, res, next) => {
  const { id } = req.query;
  let result = reviews;
  if (id) {
    const cinema = getById(genres)(id);
    if (cinema) {
      result = cinema.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.get("/users", (req, res, next) => {
  reply(res, users);
});

module.exports = router;
