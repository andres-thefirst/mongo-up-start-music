const mongoose = require('mongoose');

const AlbumSchema = require('./album');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: {
        type: String,
        index: true
    },
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number,
    labelName: String,
    retired: Boolean,
    albums: [AlbumSchema]
});

module.exports = mongoose.model('artist', ArtistSchema);
