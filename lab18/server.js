const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Папка, де знаходяться статичні файли (стилі, скрипти, зображення)
app.use(express.static(path.join(__dirname, 'public')));

// Маршрути для головної сторінки та гри
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});
