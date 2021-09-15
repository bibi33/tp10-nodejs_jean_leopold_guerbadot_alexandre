const SongService = require("../services/song.service");

module.exports = {
    findAll: async (req, res) => {
        res.status(200).json(await SongService.findAll());
    },
    findById: async (req, res) => {
        res.status(200).json(await SongService.findById(req.params.id));
    },
    findByName: async (req, res) => {
        res.status(200).json(await SongService.findByName(req.query.q));
    },
    findByArtist: async (req, res) => {
        res.status(200).json(await SongService.findByArtist(req.query.q));
    },
    createOne: async (req, res) => {
        res.status(201).json(await SongService.createOne(req.body));
    },
    updateOne: async (req, res) => {
        try{
            await SongService.updateOne(req.params.id, req.body)
            res.status(200).json({message: "song updated"});
        }catch (error){
            res.status(404).json({ message: `sauce not found` });
        }
    },
    deleteOne: async (req, res) =>{
        try{
            await SongService.deleteOne(req.params.id)
            res.status(200).json({message: 'song deleted'});
        }catch (error){
            res.status(404).json({message: 'song not found'});
        }
    }

}