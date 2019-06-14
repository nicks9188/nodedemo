const express = require('express');
const app = express() //To set-up our application
const router = express.Router();

const path = __dirname + '/views/';

app.use(express.static(path));
app.use('/', router);

//app.get('/', (req, res) => res.send("Great, It's Success!!!"));

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
});

router.get('/index', function(req,res){
    res.sendFile(path + 'index.html');
});

router.get('/hello', function(req,res){
    res.sendFile(path + 'hello.html');
})


//To start our server
// app.listen(3000, () => {
//     console.log('Our REST API Running on port 3000!');
// })  

app.listen(3001, function () {
    console.log('This is Error Handling Page. Our REST API Running on port 3001!')
})