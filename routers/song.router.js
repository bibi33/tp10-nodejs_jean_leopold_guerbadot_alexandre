const express = require("express");
const router = express.Router();
const SauceController = require("../controllers/song.controller");
const SongValidator = require("../validators/song.validator");
const { validate } = require("express-validation");

const API_SONG_ROOT = "/";
const API_SONG_ID = "/:id";
const API_SONG_SEARCH = "/search";
const API_SONG_ARTISTS = "/artists";

router.get(API_SONG_ROOT,SauceController.findAll);
router.get(API_SONG_SEARCH,SauceController.findByName);
router.get(API_SONG_ARTISTS,SauceController.findByArtist);
router.get(API_SONG_ID,SauceController.findById);
router.post(API_SONG_ROOT, validate(SongValidator.validateCreate) ,SauceController.createOne);
router.put(API_SONG_ID, validate(SongValidator.validateUpdate) , SauceController.updateOne);
router.delete(API_SONG_ID,SauceController.deleteOne);

module.exports = router;