// this will go from top to bottom in express

const express = require('express');
const morgan = require('morgan');

const app = express();

//register view engine
app.set('view engine', 'ejs');
//listen for request

app.listen(3000);
app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/',(req,res) =>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title: 'Home', blogs});
});

app.get('/about',(req,res) =>{
    res.render('about',{title: 'About'});
});

app.get('/blogs/create', (req,res) => {
    res.render('create',{title: 'create a new blog'});
});

//must be at the bottom
app.use((req,res) =>{
    res.status(404).render('404',{title: '404'});
});