// Asynchronous Way - Tasks run in back-ground
// More fast and effient

// library file system
const fs = require('fs');

const http = require('http');
const url = require('url');


/* ------------------------------------------------- FILES -------------------------------------------------*/

// const pathTxt = 'C:/Users/Kelwi/OneDrive/2022/Estudos/Udemy/Node.js,Express,MongoDB,etc/complete-node-bootcamp/1-node-farm/starter/txt/'


// // Non-blocking code execution
// // Each part of code depend of last line
// // In the final, write in Final.txt
// fs.readFile(`${pathTxt}start.txt`,'utf-8', (err, data1) => {
//     if (err) return console.log('Quebrou 0')
//     fs.readFile(`${pathTxt}${data1}.txt`,'utf-8', (err, data2) => {
//         if (err) return console.log('Quebrou 1')
//         console.log(data2);
//         fs.readFile(`${pathTxt}append.txt`, 'utf-8', (err, data3) => {
//             if (err) return console.log('Quebrou 2')
//             console.log(data3);

//             fs.writeFile(`${pathTxt}final.txt`, `${data2}\n${data3}`, 'utf-8', err => {
//                 if (err) return console.log('Quebrou 3')
//                 console.log('Your file has benn written');
//             })
//         });
//     });
// });

// console.log('Will read file...'); 


/* ------------------------------------------------- SERVER -------------------------------------------------*/

// res → request
// res → response
const server = http.createServer((req,res) => {
    const pathName = req.url;

    // Change based in url name
    if (pathName === '/' || pathName === '/overview') {
        // Write
        res.end('This is the OVERVIEW');
    }   else if (pathName === '/product') {
        res.end('This is the PRODUCTS')    
    }
});


// http://127.0.0.1:8000/
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000')
})