const express = require("express");
const router = express.Router();
const songRouter = require("./song.router");

const API_SONG_PATH = "/songs";

router.use(API_SONG_PATH, songRouter);


module.exports = router;

