const http = require('http');

const port = 3000;

var numberRequest=0;

const server = http.createServer((req,res)=>
{
   console.log('Server request______'+numberRequest);  
   numberRequest++;
   console.log(req.url,req.method);
   res.setHeader('Content-type','application-json');
   /*
   res.write('<head><link href="" rel="stylesheets"></head>');
   res.write('<h1>Hello Denis!</h1>');
   */

const data=JSON.stringify(
    [
        {name:'denis'},
        {surname:'doroshenko'}
    ]
)
   res.end(data);
});

server.listen(port,'localhost',(err)=>
{
    err ? console.log(err):console.log(`listening port ${port}`);
});

