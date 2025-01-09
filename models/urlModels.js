const mongoose = require("mongoose");

//definig schema
const urlSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBY : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    }
  },
  { timestamps: true }
);

// make the model
const URL = mongoose.model("url", urlSchema);

module.exports = URL;
