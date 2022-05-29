const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Enable file uploads
const fileUpload = require('express-fileupload')
app.use(fileUpload())

const productRouter = require('./routes/Products');
const variantsRouter = require('./routes/Variants');
const imagesRouter = require('./routes/Images');
app.set('views', __dirname + '/templates');
app.set('view engine', 'twig');

app.get('/', (req, res) =>{
    res.render("views/home", { name: "World!"})
})

app.use("/products", productRouter)
app.use("/variants", variantsRouter)
app.use("/images", imagesRouter)

app.use(express.static('public'))

app.listen(3000);

