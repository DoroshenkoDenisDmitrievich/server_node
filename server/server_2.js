const http = require('http');
const fs=require('fs');
const path=require('path');


const port = 3000;

var numberRequest=0;

const server = http.createServer((req,res)=>
{
const createPath = (page)=> path.resolve(__dirname,'views',`${page}.html`);
   let basePath='';
   console.log('Server request______'+numberRequest);  
   numberRequest++;
   res.setHeader('Content-type','text/html');
  switch(req.url)
  {
    case '/' :
        basePath=createPath('index');
        res.statusCode=200;
        break;
    case'/contacts':
        basePath=createPath('contacts');
        res.statusCode=200;
        break;
    default:
        basePath=createPath('error');
        res.statusCode=404;
        break;
  }


    fs.readFile(basePath,(err,data)=>{
    if(err){
        console.log('-------------error-----------');
        res.end();
    }
    else 
    {
    res.write(data);
    res.end();
    }
    })

});


server.listen(port,'localhost',(err)=>
{
    err ? console.log(err):console.log(`listening port ${port}`);
});