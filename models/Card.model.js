const { Schema, model } = require("mongoose");

const cardSchema = new Schema(
  {
   name: {
     type: String,
     required: [true, 'Email is required.'],
     unique: true,
    },
    genre: {
        enum: ['cine', 'tv', 'historia', 'música', 'literatura', 'política', 'otros']
    },
    description: {
      type: String
    },
    color: {
        enum: ['Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Morado', 'Rosa']
    },
    owner: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    timestamps: true
  }
);

const card = model("card", cardSchema);

module.exports = card;