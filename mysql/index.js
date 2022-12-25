const mysql=require('mysql');

const connection=mysql.createConnection(
    {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'itproger'
    }
)
/*
connection.connect( err =>
{
        if(err){console.log('error!');}
        else {console.log('all ok!!!');}
});
*/
//let query='INSERT INTO users VALUES ('Michail',8080)';
let query1='SELECT * FROM users';

let query2='CREATE TABLE cars (x int,y int)';

connection.query(query1,(err,result)=>
{
    console.log(err);
    console.log(result);
});

connection.end((err)=>
{
if (err) {console.log('error in the end!');}
else console.log('THe end connection!');
});