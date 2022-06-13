/* Asynchronous Way - Tasks run in back-ground More fast and effient */

// // library file system
const fs = require('fs');
const http = require('http');
const url  = require('url');
// const { NOTFOUND } = require('dns');

// Path data
const pathTxt = 'C:/Users/Kelwi/OneDrive/2022/Estudos/Udemy/Node.js,Express,MongoDB,etc/complete-node-bootcamp/1-node-farm/starter/dev-data/'

// /* ------------------------------------------------- FILES -------------------------------------------------*/

// // // Non-blocking code execution
// // // Each part of code depend of last line
// // // In the final, write in Final.txt
// // fs.readFile(`${pathTxt}start.txt`,'utf-8', (err, data1) => {
// //     if (err) return console.log('Quebrou 0')
// //     fs.readFile(`${pathTxt}${data1}.txt`,'utf-8', (err, data2) => {
// //         if (err) return console.log('Quebrou 1')
// //         console.log(data2);
// //         fs.readFile(`${pathTxt}append.txt`, 'utf-8', (err, data3) => {
// //             if (err) return console.log('Quebrou 2')
// //             console.log(data3);

// //             fs.writeFile(`${pathTxt}final.txt`, `${data2}\n${data3}`, 'utf-8', err => {
// //                 if (err) return console.log('Quebrou 3')
// //                 console.log('Your file has benn written');
// //             })
// //         });
// //     });
// // });

// // console.log('Will read file...'); 

// /* ------------------------------------------------- SERVER -------------------------------------------------*/

// Sync
// Befone anything, the date be load
const data = fs.readFileSync(`${pathTxt}data.json`,'utf-8')
const dataObj = JSON.parse(data);


 
const server = http.createServer((request, response) => {
    const route = request.url;
 
    switch (route) {
        case '/':
        case '/overview':
            response.end('This is the OVERVIEW');
            break;
        case '/product':
            response.end('This is the PRODUCT');
            break;
        case '/api': {
                // Response Headers
                response.writeHead(200, { 'Content-type': 'application/json'})
                response.end(data); 
        }            
            break;
        default:
            // Response Headers
            response.writeHead(404, {'Content-type': 'text/html', 'my-own-header': 'hello world'});
            response.end('<h1>Page not found</h1>');
            break;
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});