const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req,res) => {

    const num = _.random(0,20);
    console.log(num);



    res.setHeader('Content-Type', 'text/html');

    let path =  './view/';

    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/about-us':
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end();
        default:
            path += '404.html';
            break;
        
    }

    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });

});

server.listen(3000, 'localhost' , () =>{
    console.log('listening for request on port 3000');
});