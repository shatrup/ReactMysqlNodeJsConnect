const express = require('express');
const port = process.env.PORT || 3001;
const app = express(); //inititial express

const cors = require('cors');

var conn = require('./database/db');

app.use(cors());

conn.connect(err => {
    if (err) {
        return err;
    }
});

//console.log(conn);
require('./Routes/Routes_Html')(app, conn);



//start sever
app.listen(port, () => {
    console.log('App is running ' + port);
});
