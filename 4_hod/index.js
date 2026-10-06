// install balíčků:
// npm i express
// npm i -g nodemon

import express from "express";
import {loadEnvFile} from "node:process";

loadEnvFile();

const PORT = process.env.PORT;
const user = process.env.user;
const password = process.env.password;

const app = express();

app.use(express.urlencoded({extended: true}));


app.listen(PORT, ()=>{
    console.log(`Vítej uživateli ${user}`);
    console.log(`Server běží na portu: ${PORT}`);
})

app.get("/", (req, res)=>{
    res.sendFile("./public/templates/index.html", {root: "."});
});

app.post("/", (req, res)=>{
    const jmeno = req.body.jmeno;
    const prijmeni = req.body.prijmeni;

    console.log(`Jméno: ${jmeno}, Příjmení: ${prijmeni}`);
});