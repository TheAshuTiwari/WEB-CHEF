const { Schema, model, Types } = require('../connection');
const mongoose = require('mongoose');
const myschema = new mongoose.Schema({
  image: String,
  user: { type: mongoose.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date }
});

module.exports = mongoose.model('images', myschema);
