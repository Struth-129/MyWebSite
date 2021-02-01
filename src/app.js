const express = require('express');
const path = require('path');
const staticPath = path.join(__dirname,"../public");
const app = express();
const hbs = require('hbs');
const tempPath = path.join(__dirname,"../templates/views");
const part_path = path.join(__dirname,"../templates/partials");
app.set('view engine','hbs');
app.set('views',tempPath);
app.use(express.static(staticPath));
hbs.registerPartials(part_path);

app.get("/index",(req,res)=> {
    res.render('index');
});
app.get("/myworks",(req,res) => {
    res.render('myworks');
})

app.listen(3000);