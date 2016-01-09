var express = require('express'),
    app = express(),
    mainRoutes = require('./routes/mainRoute'),
    accessRoutes = require('./routes/accessRoutes'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

//Setting up the view engine for the application
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route #1
app.use('/social/api', mainRoutes);
app.use('/', accessRoutes);

mongoose.connect('mongodb://localhost:27017/test');
mongoose.connection.on('connected', function () {
  console.log('Mongoose test connection open...');
});

//Setting up the application port
app.listen(process.env.PORT || 5555);

console.log('Application is listening....');
