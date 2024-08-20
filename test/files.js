//fs is filesystems

const fs = require('fs');

fs.readFile('./text.txt', (err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString()); // remember this one or else it will give ascii data
});

console.log("lkjashdf");
