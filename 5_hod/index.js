import express, { urlencoded } from "express"
import sqlite from "sqlite3"
import bcrypt from "bcrypt"
import {loadEnvFile} from "node:process"
import path from "path"
import { fileURLToPath } from "url"

loadEnvFile()

const db = new sqlite.Database("users.db")

db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)", (err) => {
    if (err) {
        console.log("Error creating table:", err)
    }
})

const PORT = process.env.PORT
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '.')))


app.listen(PORT, ()=> {
    console.log("Server running on PORT:", PORT)
})

app.get("/", (req, res) => {
    res.redirect("/login")
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "templates", "register.html"))
})

app.post("/register", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        return res.status(400).send("Vyplň uživatelské jméno a heslo.")
    }

    const passwordHash = await bcrypt.hash(password, 12)

    db.run(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, passwordHash],
        (err) => {
            if (err) return res.status(500).send("Registrace se nepodařila.")

            console.log("Registrován uživatel:", username)
            res.redirect("/login")
        }
    )
})

app.get("/login", async (req, res) => {
    res.sendFile(path.join(__dirname, "public", "templates", "login.html"))
})

app.post("/login", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        return res.status(400).send("Vyplň uživatelské jméno a heslo.")
    }

    db.get("SELECT password FROM users WHERE username = ?", [username], async (err, user) => {
        if (err) return res.status(500).send("Přihlášení se nepodařilo.")
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send("Nesprávné uživatelské jméno nebo heslo.")
        }

        res.send("Přihlášení bylo úspěšné.")
    })
})