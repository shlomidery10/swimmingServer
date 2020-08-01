var mongoose = require('mongoose');

//connect to mongo
mongoose.connect('mongodb://localhost:27017/SwimmingDB', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("connect to mongo")});

var warmupSchema = new mongoose.Schema({
 trainingSet:[String]
});
var Warmup = mongoose.model('warmup', warmupSchema);

var majorExerciseSchema = new mongoose.Schema({
  trainingSet:[String]
 });
 var MajorExercise = mongoose.model('majorExercise', majorExerciseSchema);

 var releaseSchema = new mongoose.Schema({
  trainingSet:[String]
 });
 var Release = mongoose.model('release', releaseSchema);



var my_schemas = {'Warmup':Warmup,'MajorExercise':MajorExercise,'Release':Release};
module.exports = my_schemas;


