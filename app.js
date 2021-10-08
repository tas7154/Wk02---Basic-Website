// Imports
const express = require('express');
const app = express();
//const port = 4000;
//app.set('port', process.env.PORT || 3000);

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

// Set Routes
app.get('', (req, res) => {
  res.render('index', { text: ' This is EJS' })
})

app.get('/about', (req, res) => {
  res.render('about', { text: 'This is about' })
})
let listener = app.listen(); 
console.log(`Listening to port number ${listener.address().port}`);

//app.listen(port, () => console.log(`App listen on port ${port}`));