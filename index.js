var express = require('express'),
    app = express(),
    mainRoutes = require('./Routes/mainRoute');

//Setting up the view engine for the application
app.set('view engine', 'ejs');

//Route #1
app.use('/', mainRoutes);

//Setting up the application port
app.listen(5555);

console.log('Application is listening....');
