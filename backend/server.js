const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const Database = require('./app/config/Database');

const app = express();
dotenv.config({ path: './.env' });

Database.authenticate().then(() => console.log("Database connected!"));

// Setting up CORS
let whiteList = [
    'http://localhost:3000'
];

app.use(cors({
    origin: function (origin, callback){
        if( whiteList.indexOf(origin) !== -1 || !origin ){
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS!'));
        }
    }
}));

// Set static folder
app.use(express.static(path.join(__dirname, './public')));

// Parse request application/json urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define Routes
app.use('/api', require('./app/routes'));

// Listening to the Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Magic happen at http://localhost:${PORT}/`));