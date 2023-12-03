//Imports
const express=require('express');
const expressLayouts=require('express-ejs-layouts');

const app=express();
const port=8000;

//static files
app.use(express.static('public'));

//set Templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/full-width');
app.set('view engine','ejs');

//Routes
app.get('',(req,res)=> {
    res.render('index',{title:'Home Page'});
});

app.get('/about',(req,res)=> {
    res.render('about',{title:'About Page', layout:'./layouts/sidebar'});
});

//Listen on Port 8000
app.listen(port,()=> 
console.info(`App Listening on Port ${port}`))