var mongoose = require('mongoose');

//connect to mongo
mongoose.connect('mongodb://localhost:27017/SwimmingDB', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("connect to mongo")});

var WorkoutSchema = new mongoose.Schema({
  trainerName:[string],
  week:[Number],
  goalOfTraining:[String],
  date:[Date],
  WorkoutParts:[[WorkoutPart]]
});
var Workout = mongoose.model('workout', WorkoutSchema);

var WorkoutPartSchema = new mongoose.Schema({
  Name:[string],
  goal:[String],
  exercises:[[Exercise]]
});
var WorkoutPart = mongoose.model('workoutPart', WorkoutPartSchema);

var exerciseSchema = new mongoose.Schema({
  repetition:[Number],
  distance:[Number],
  description:[String],
  ExerciseSets:[[ExerciseSet]]
});
var Exercise = mongoose.model('exercise', exerciseSchema);

var exerciseSetSchema = new mongoose.Schema({
  description:[String],
  distance:[Number],
 });
var ExerciseSet = mongoose.model('exerciseSet', exerciseSetSchema);

var my_schemas = {'Workout':Workout,'WorkoutPart':WorkoutPart,'Exercise':Exercise,'ExerciseSet':ExerciseSet};
module.exports = my_schemas;


