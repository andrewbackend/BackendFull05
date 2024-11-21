const http = require('http');

const server = http.createServer((req, res) => {
    if (req.usrl === '/lento'){
        setTimeout(() => {
            res.end('Esta respuesta tardó 5 segundos');
        }, 5000);
    } else {
        res.end('Respuesta rápida');
    }
})

server.listen(3001, () => {
    console.log('Servidor ejecutándose en http://localhost:3001');
});