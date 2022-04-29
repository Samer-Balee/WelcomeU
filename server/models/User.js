const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
          },
        from: {
            type: String,

        },
        arrivedAt: {
            type: String,
        },
        speak: {
            type: String,
        },
        livesIn: {
            type: String,
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post"
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// hash user password
// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//       const saltRounds = 10;
//       this.password = await bcrypt.hash(this.password, saltRounds);
//     }
  
//     next();
//   });

// get total count of friends on retrieval
userSchema.virtual("friendCount")
.get(function() {
    return this.friends.length;
});

// custom method to compare and validate password for logging in
// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
//   };

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;