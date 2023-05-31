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
        enum: ['Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Morado', 'Rosa']
    },
    cards: [{
      type: Schema.Types.ObjectId,
      ref: 'Card'
    }],
    owner: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    timestamps: true
  }
);

const Deck = model("Deck", deckSchema);

module.exports = Deck;