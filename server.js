if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
};
    
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const userRouter = require('./routes/users');
const indexRouter = require('./routes/index');

mongoose.connect(
    process.env.DATABASE_URL, 
    { 
        "auth": { "authSource": "admin" },
        "user": process.env.admin,
        "pass": process.env.pwd,
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/admin-layout', 'layouts/user-layout');
app.use(expressLayouts);
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.use('/users', userRouter);
app.use('/', indexRouter);

app.listen(3000)