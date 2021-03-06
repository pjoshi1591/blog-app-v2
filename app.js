const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const User = require('./models/user');

const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const reviewsRouter = require('./routes/reviews');

const app = express();

// connect to database
mongoose.connect('mongodb://localhost/blog-app', {useNewUrlParser: true, useCreateIndex: true});

// notified if we connect successfully or if a connection error occurs
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`we're connected!`);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// configure express session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Passport-Local Configuration
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// mount routes
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/posts/:id/reviews', reviewsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
