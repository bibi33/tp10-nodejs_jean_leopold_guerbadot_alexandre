const SongService = require("../services/song.service");
const chai = require("chai");
const expect = chai.expect;

let song1 = {
    "id": "song1",
    "artist": "acdc",
    "title": "highway to hell",
    "type": "rock",
    "duration": 150
}

let song2 = {
    "id": "song2",
    "artist": "francky vincent",
    "title": "tomber la chemise",
    "type": "lol",
    "duration": 120
}

let song3 = {
    "id": "song3",
    "artist": "le petit bonhomme en mousse",
    "title": "patoche",
    "type": "lol",
    "duration": 150
}


describe( "SongService", () => {

   describe("test isLonger", () => {
       it("should return true", () => {
         expect(SongService.isLonger(song1, song2)).to.be.true;
       });
       it("should return false", () => {
           expect(SongService.isLonger(song2, song1)).to.be.false;
       });
       it("should return true (both durations are equals)", () => {
           expect(SongService.isLonger(song1, song3)).to.be.true;
       });
   });

});

