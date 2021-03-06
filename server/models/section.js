const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

/*
  Mongo backend schema definition
  When making changes here, make corresponding changes to section.ts
*/

var sectionSchema = new Schema({
  _id: { type: objectId, auto: true },
  name: {
    type: String,
    required: true
  },
  items: [{ type: objectId, ref: 'Item' }]
});

module.exports = mongoose.model('Section', sectionSchema);
