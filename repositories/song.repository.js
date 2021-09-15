const db = require("../models/index");
const Song = db.song;

module.exports = {
    findAll: () => {
        return Song.findAll();
    },
    findById: (id) => {
        return Song.findByPk(id);
    },
    findByName: (name) => {
        return Song.findOne( { where: { title: name } } );
    },
    findByArtist: (artist) => {
        return Song.findAll( { where: { artist: artist }});
    },
    createOne: (song) => {
        return Song.create(song);
    },
    updateOne: (id, song) => {
        return Song.update(song, {where: {id: id}});
    },
    deleteOne: (id) => {
        return Song.destroy({where: {id: id}});
    },
}