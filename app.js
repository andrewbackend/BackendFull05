const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200; //Estado OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola, bienvenidos a mi servidor con Node.js!'); 
});

server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});