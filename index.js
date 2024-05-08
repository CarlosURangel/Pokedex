const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res, next) =>{
    console.log(req);
    res.send("Hola Mundo");
});

app.get("/pokemon", (req, res, next) =>{
    res.json({ nombre: "Ulises", edad: "19"});
});
app.listen(3000, () =>{
    console.log("Server is running");
});