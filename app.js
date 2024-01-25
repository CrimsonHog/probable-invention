const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;

app.use(fileUpload());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/upload', (req, res) => {
    const { image } = req.files;

    if (!image) return res.sendStatus(400);

    image.mv(__dirname + '/upload/' + image.name);

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
