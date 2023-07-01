const express = require('express'); // подключение модуля express

const app = express(); // создание express app

app.set("view engine", "ejs"); // подключение шаблонизатора ejs
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public')) // подключение папки, где находятся стили

// обработка url'ov
app.get("/", (req, res) => {
    res.render("new")
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/user/:userName", (req, res) => {
    const userData = { username: req.params.userName, hobbies: ["Футбол", "Игры", "Хуйня"] }
    res.render("user", userData);
});

app.post("/check-user", (req, res) => {
    let userName = req.body.userName;
    if (userName == "") {
        return res.redirect("/");
    } else {
        return res.redirect("/user/" + userName);
    }
})

//порт
const PORT = 8080;
//запуск сервера
app.listen(PORT, () => {
    console.log(`Server start is: http://127.0.0.1:${PORT}`)
})
