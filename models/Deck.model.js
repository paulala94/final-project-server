const { Schema, model } = require("mongoose");

const deckSchema = new Schema(
  {
   name: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
    },
    description: {
      type: String
    },
    color: {
    type: String,
    },
    cards: [{
      type: Schema.Types.ObjectId,
      ref: 'Card'
    }],
    owner: {
       ref: 'User',
       type: Schema.Types.ObjectId
        },
  },
  {
    timestamps: true
  }
);

const Deck = model("Deck", deckSchema);

module.exports = Deck;