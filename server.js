import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';

const app = express();
const __dirname = path.resolve();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static("src/public"));

app.get('/', (req, res) => {
    res.render('layouts/main');
  });
  
  app.get('/hello/:name', (req, res) => {
    res.render('hello', { name: req.params.name });
  });
  
  app.get('/about', (req, res) => {
    res.render('about');
  });
  
  app.get('/contact', (req, res) => {
    res.render('contact');
  });
  
  app.get('/info', (req, res) => {
    res.render('info');
  });
  
  app.get('/history', (req, res) => {
    res.render('history');
  });
  

  app.use(express.urlencoded({ extended: false }));

  app.post('/contact/send-message', (req, res) => {

    const { author, sender, title, message } = req.body;
  
    if(author && sender && title && message) {
      res.send('The message has been sent!');
    }
    else {
      res.send('You can\'t leave fields empty!')
    }
  
  });
  app.use((req, res) => {
    res.status(404).send('404 not found...');
  });
  
  app.listen(8000, () => {
    console.log('Server is running on port: 8000');
  });