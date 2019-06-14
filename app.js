const express = require('express');
const app = express() //To set-up our application

app.get('/', (req, res) => res.send("Great, It's Success!!!"));

//To start our server
app.listen(3000, () => {
    console.log('My REST API Running on port 3000!');
})  