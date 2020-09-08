const express=require('express');
const proRouter=require('./router/pro.js');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({
    extended:false
}));
app.listen(8080);
app.use(express.static('public'));
app.use('/pro',proRouter);