const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const fileStore = require('session-file-store')(session);
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;
const ID = process.env.ID;
const PASSWORD = process.env.PASSWORD;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.use(session({
    secret: 'soo',
    resave: false,
    saveUninitialized: true,
    store: new fileStore(),
    cookie: {
        maxAge: 1000 * 60 * 0.2
    }
}))

app.post('/signin', (req, res) => {
    const { body: { id, password } } = req;
    if (id == ID && password === PASSWORD) {
        req.session.id = id;
        res.send({ valid: true })
    } else {
        res.send({ valid: false })
    }
})

app.get('/more', (req, res) => {
    res.send({
        data: [
            {
                id: 1,
                price: 305000,
                src: [
                    "https://cdn-images.farfetch-contents.com/15/33/25/66/15332566_27396036_480.jpg",
                    "https://cdn-images.farfetch-contents.com/15/33/25/66/15332566_27395273_1000.jpg"
                ],
                name: "스쿱 넥 탱크 탑",
                brand: "Totême"
            }
        ]
    })
})

const server = app.listen(PORT, () => {
    `SERVER PORT on ${PORT}`
});

