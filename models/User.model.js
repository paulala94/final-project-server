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
    },
    description: {
      type: String
    },
    image: {
      type: String,
      default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER',
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
