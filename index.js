const express = require('express');
const app = express()

// GET / HTTP/1.1
app.get('/', (request, response) => {
    response.send('Home Page! GET...')
});

// GET ALL
app.get('/products/all', (request, response) => {
    response.send('Products, '+ request.query.sort);
});

app.get('/products/:productId-:productSize-:productColor', (request, response)=>{
    response.send('Products ' + request.params.productId+', '+ request.params.productSize+', '+ request.params.productColor );
});

app.get('/products/:productId', (request, response)=>{
    response.send('Products' + request.params.productId);
});

app.listen(3000);

