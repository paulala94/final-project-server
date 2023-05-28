const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'El email es obligatorio'],
      unique: true,
      lowercase: true,
      trim: true
    },
    username: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio'],
      unique: true,
      minlength: [3, 'El nombre de usuario es demasiado corto']
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
      minlength: [3, 'La contraseña es demasiado corta']
    },
    description: {
      type: String
    },
    avatar: {
    type: String,
    default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER',
    },
    decks: [{
      type: Schema.Types.ObjectId,
      ref: 'Deck'
    }],
    cards: [{
      type: Schema.Types.ObjectId,
      ref: 'Card'
    }],
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
