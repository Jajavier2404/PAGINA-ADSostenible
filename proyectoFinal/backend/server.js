import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";
import { open } from "sqlite";

const app = express();
app.use(cors());
app.use(express.json());

// Inicializar base de datos SQLite
let db;
(async () => {
  db = await open({
    filename: "users.db", // Se creará en la carpeta backend
    driver: sqlite3.Database,
  });
  await db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      email TEXT,
      password TEXT
    )
  `);
})();

// Registro
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res
      .status(400)
      .json({ success: false, message: "Campos requeridos" });
  try {
    const user = await db.get(
      "SELECT * FROM users WHERE username = ?",
      username
    );
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Usuario ya existe" });
    const hash = await bcrypt.hash(password, 10);
    await db.run(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      username,
      email,
      hash
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Campos requeridos" });
  try {
    const user = await db.get(
      "SELECT * FROM users WHERE username = ?",
      username
    );
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Usuario no encontrado" });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res
        .status(400)
        .json({ success: false, message: "Contraseña incorrecta" });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

app.listen(3001, () => console.log("Servidor backend en puerto 3001"));
