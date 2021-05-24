const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

const RecipeSchema = new Schema({
  category: String,
  title: String,
  image: String,
  description: String,
  prepTime: Number,
  cookTime: Number,
  totalTime: Number,
  serving: String,
  effort: String,
  isFavorite: Boolean,
  url: String,
  ingredients: [{
    name: String,
    type: String
  }],
  steps: [{
    step: String
  }]
}, 
{
  // mongoose: type decoration - because I'm using 'type' in the ingredients object
  typeKey: "$type"
})

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
  role: String
})

// pre - before trying to save anything
UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});
   
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

module.exports = {
  Recipe: new mongoose.model('Recipe', RecipeSchema),
  User: new mongoose.model('User', UserSchema)
}