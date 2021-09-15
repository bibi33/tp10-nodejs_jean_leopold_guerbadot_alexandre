const SongRepository = require("../repositories/song.repository");

module.exports = {
    findAll: async () => {
       return await SongRepository.findAll();
    },
    findById: async (id) => {
       return await SongRepository.findById(id);
    },
    findByName: async (name) => {
        return await SongRepository.findByName(name);
    },
    findByArtist: async (artist) => {
        return await SongRepository.findByArtist(artist);
    },
    createOne: async (song) => {
        return await SongRepository.createOne(song);
    },
    updateOne: async (id, song) => {
        let tempSong = await SongRepository.findById(id);
        if(!tempSong){
            throw Error("song not found");
        }
        return await SongRepository.updateOne(id, song);
    },
    deleteOne: async (id) => {
        let tempSong = await SongRepository.findById(id);
        if(!tempSong){
            throw Error("Song not found");
        }
        return await SongRepository.deleteOne(id);
    }


}