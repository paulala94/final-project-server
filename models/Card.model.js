const { Schema, model } = require("mongoose");

const cardSchema = new Schema(
  {
   name: {
     type: String,
     required: [true, 'Email is required.'],
     unique: true,
    },
    genre: { 
        type: String,
        enum: ['Cine', 'TV', 'Historia', 'Música', 'Literatura', 'Política', 'Otros']
    },
    description: {
      type: String
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

module.exports = card