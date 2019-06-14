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

router.get('/', function(req,res){
    res.sendFile(path + 'index.html');
});

router.get('/hello', function(req,res){
    res.sendFile(path + 'hello.html');
})

//Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);    
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

//To start our server
// app.listen(3000, () => {
//     console.log('Our REST API Running on port 3000!');
// })  

app.listen(3000, function () {
    console.log('This is Error Handling Page. Our REST API Running on port 3000!')
})