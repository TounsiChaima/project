const express= require ('express');
const app = express();

//Middlewares
app.use('/', ()=>{console.log ('this is a middleware')});
//ROUTES
app.get('/',(req, res)=>{
    res.send('We are home');
});
//HOW DO WE START LISTENNING TO THE SERVER
app.listen(3000);