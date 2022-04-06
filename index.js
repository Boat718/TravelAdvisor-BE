
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');
const cookie = require('cookie-parser');
const app = express();

require("./config/passport");

app.use(cors());
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/users',userRoutes);



app.listen( process.env.PORT || 5000 , () => {
    console.log(` Server is running ` );
})
