const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    username: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
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
