const express = require('express');
const path = require('path');
const staticPath = path.join(__dirname,"../public");
const app = express();

app.use(express.static(staticPath))

app.get("/",(req,res)=> {
    res.send('index');
});

app.listen(3000);