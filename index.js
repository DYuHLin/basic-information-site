const express = require('express');

const app = express();

app.use(express.static('public'));

//creating the server
app.listen(8080);

//sending index page
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

//sending about page
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

//sending contact page
app.get('/contact-me', (req, res) => {
    res.sendFile('./views/contact-me.html', { root: __dirname });
});

//redirecting to about page
app.get('/about-page', (req, res) => {
    res.redirect('/about');
});

//404 page if user goes to an invalid link
app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname });
});